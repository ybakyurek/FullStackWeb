// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


import express from 'express';


const port = 3000;
const app = express();

app.get("/", (req, res) => {
  console.log(res.send("Hello World"));
})

app.get("/contact", (req, res) => {
  res.send('tel:"532"');
})

app.get("/about", (req, res) => {
  res.send('<h1>About me</h1><p>Yildirim</p>');
})

app.listen(port , ()=> {
    console.log(`Server is running on ${port}`);
});




