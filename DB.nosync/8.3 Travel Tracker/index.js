import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;





app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// ************************************* SOLUTION 1 **********************************************************//
/*
const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});

let visited_countries_list = [];

async function visited_countries() {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT country_code FROM visited_countries");
    visited_countries_list = result.rows.map((row) => row.country_code);
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    client.release();
  }
}

app.get("/", async (req, res) => {
  await visited_countries();
  res.render("index.ejs", {
    total: visited_countries_list.length,
    countries: visited_countries_list,
  });
});
*/




// ************************************* SOLUTION 2 **********************************************************//
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


async function checkVisisted()  {
  let result = await db.query("SELECT country_code FROM visited_countries");
  return result.rows.map((row) => row.country_code);
  }

  app.get("/", async (req, res) => {
    const countries = await checkVisisted();
    res.render("index.ejs", { countries: countries, total: countries.length  });
  });


  app.post("/add",  async (req, res) => {

    const country = req.body.country.toLowerCase();
    let result = await db.query(`SELECT country_code FROM  countries where LOWER (country_name) LIKE '%${country}%'`);
    let country_code  = result.rows.map((row) => row.country_code);
    console.log(country_code);
    if(country_code.length>0){
    await db.query(`insert into visited_countries (country_code) 
    select '${country_code}' WHERE NOT EXISTS ( SELECT 1 FROM visited_countries WHERE country_code = '${country_code}'
    );`);
  }
  res.redirect("/");
  });







app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
