import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentUserId = 1;
let colour = "teal";

let users = [];

try {
  // Assuming db.query returns a promise
  const queryResult = await db.query(`SELECT * FROM users`);

  // Assuming the result contains rows property
  users = queryResult.rows;
} catch (error) {
  console.error("Error executing query", error.stack);
  // Handle the error as needed
}

// Now 'users' variable contains the results from the database query
console.log(users);

async function checkVisisted() {
  const result = await db.query(
    `SELECT country_code FROM visited_countries where user_id=${currentUserId}`
  );
  let countries = [];
  const result_color = await db.query(
    `SELECT id,color FROM users where id=${currentUserId}`
  );

  colour = result_color.rows[0].color;

  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: colour,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    console.log(countryCode, currentUserId);
    try {
      await db.query(
        "INSERT INTO visited_countries (user_id,country_code) VALUES ($1,$2)",
        [currentUserId, countryCode]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  const name = req.body.name;
  const color = req.body.color;
  try {
    await db.query("INSERT INTO users (name,color) VALUES ($1,$2)", [
      name,
      color,
    ]);
    const usersResult = await db.query("SELECT * FROM users");
    users = usersResult.rows;
    currentUserId = users[users.length - 1].id;

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
