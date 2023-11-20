import express, { response } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";
const yourBearerToken = "5bb08ed6-6b61-4c15-b2ca-d16d796d0e65";

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.use(bodyParser.urlencoded({ extended: true }));

// Render the index page with default content
app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

// GET SECRET
app.post("/get-secret", async (req, res) => {
  // Extract search ID from the request body
  const searchId = req.body.id;

  try {
    // Make a GET request to retrieve secret data
    const result = await axios.get(`${API_URL}/secrets/${searchId}`, config);
    // Render the index page with the retrieved data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
    console.log('Successfully');
  } catch (error) {
    // Render the index page with the error message if the request fails
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// POST SECRET
app.post("/post-secret", async (req, res) => {
  // Extract secret and score from the request body
  const postData = {
    secret: req.body.secret,
    score: req.body.score,
  };

  try {
    // Make a POST request to create a new secret
    const result = await axios.post(`${API_URL}/secrets`, postData, config);
    // Render the index page with the created secret data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
    console.log("Successfully");
  } catch (error) {
    // Render the index page with the error message if the request fails
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// PUT SECRET
app.post("/put-secret", async (req, res) => {
  // Extract search ID and updated secret data from the request body
  const searchId = req.body.id;
  const postData = {
    secret: req.body.secret,
    score: req.body.score,
  };

  try {
    // Make a PUT request to update an existing secret
    const result = await axios.put(`${API_URL}/secrets/${searchId}`, postData, config);
    // Render the index page with the updated secret data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
    console.log('Successfully');
  } catch (error) {
    // Render the index page with the error message if the request fails
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// PATCH SECRET
app.post("/patch-secret", async (req, res) => {
  // Extract search ID and updated secret data from the request body
  const searchId = req.body.id;
  const postData = {
    secret: req.body.secret,
    score: req.body.score,
  };

  try {
    // Make a PATCH request to partially update an existing secret
    const result = await axios.patch(`${API_URL}/secrets/${searchId}`, postData, config);
    // Render the index page with the updated secret data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
    console.log('Successfully');
  } catch (error) {
    // Render the index page with the error message if the request fails
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// DELETE SECRET
app.post("/delete-secret", async (req, res) => {
  // Extract search ID from the request body
  const searchId = req.body.id;

  try {
    // Make a DELETE request to remove a secret
    const result = await axios.delete(`${API_URL}/secrets/${searchId}`, config);
    // Render the index page with the updated secret data
    res.render("index.ejs", { content: JSON.stringify(result.data) });
    // Render the index page with a success message
    console.log('Successfully deleted:');
  } catch (error) {
    // Render the index page with the error message if the request fails
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
