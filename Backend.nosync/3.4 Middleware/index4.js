import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let bandName = "";
// app.use(morgan("combined")); // Log requests to the console
app.use(bodyParser.urlencoded({ extended: true }));


function bandNamelogger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log("Request Object: ", req.body);
  console.log("Object attribute: " + req.body["street"] + req.body["pet"]);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNamelogger);


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Backend.nosync/3.5 Secrets Project/public/index.html");
  });

  app.post("/submit", (req, res) => {
    // res.send("<h1>Your Hero Name</h1><p>" + req.body.street + req.body.pet +"</p>"); //or
    res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
    console.log("Street: " + req.body.street + "\n" + "Pet: "  + req.body.pet);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




