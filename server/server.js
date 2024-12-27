const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5099;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Welcome to the backend API!");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
