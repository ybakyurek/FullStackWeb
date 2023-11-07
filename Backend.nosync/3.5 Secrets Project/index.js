import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let authorization = false;
app.use(bodyParser.urlencoded({ extended: true }));

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log(req.body);
  next();
}

app.use(logger);



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// // users have to fill password everytime 
// app.post("/check", (req, res) => {
//   const password = req.body.password;
//   if(password === 'ILoveProgramming'){
//     res.sendFile(__dirname + "/public/secret.html");
//   }
//   else{
//     res.sendFile(__dirname + "/public/index.html");
//   }
// });


app.post("/check", (req, res) => {
  const password = req.body.password;
  if(password === 'ILoveProgramming'){
    authorization=true;
  }

  if(authorization ===true){
    res.sendFile(__dirname + "/public/secret.html");
  }
  else{
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
