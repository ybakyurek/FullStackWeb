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

let items = [];

  const queryResult = await db.query(`SELECT * FROM items`);
  items = queryResult.rows;

app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM items order by id ");
  items = result.rows;
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
    await db.query(
      "INSERT INTO items (title) VALUES ($1)",
      [req.body.newItem])

    res.redirect("/");
});

app.post("/edit", async (req, res) => {
  await db.query(
    'UPDATE items SET title = $1 WHERE id = $2',
    [req.body.updatedItemTitle, req.body.updatedItemId]
  );

    res.redirect("/");

});

app.post("/delete",async (req, res) => {
  await db.query(
    'delete from items WHERE id = $1',
    [req.body.deleteItemId]
  );

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
