import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function updateTitle() {
  const result = await db.query("SELECT * FROM items order by id ");
  items = result.rows;
}


try {
  // Assuming db.query returns a promise
  const queryResult = await db.query(`SELECT * FROM items`);

  // Assuming the result contains rows property
  items = queryResult.rows;
} catch (error) {
  console.error("Error executing query", error.stack);
  // Handle the error as needed
}

app.get("/", (req, res) => {
  
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  try {
    await db.query(
      "INSERT INTO items (title) VALUES ($1)",
      [item]
    );
    updateTitle();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});


app.post("/edit", async (req, res) => {

  try {
    await db.query(
      'UPDATE items SET title = $1 WHERE id = $2',
      [req.body.updatedItemTitle, req.body.updatedItemId]
    );
    updateTitle();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }

});

app.post("/delete",async (req, res) => {
  console.log(req.body)
  try {
    await db.query(
      'delete from items WHERE id = $1',
      [req.body.deleteItemId]
    );
    updateTitle();
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
