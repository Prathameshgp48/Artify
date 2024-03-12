/*server without express
const http = require("http");
const server = http.createServer((req, res) => {
  console.log("server created");
  res.end("hello world");
});

server.listen(5000, "localhost", () => {
  console.log("Server is running on port: 5000");
}); */

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

// Require the model files (assuming it sets up a MongoDB schema)
require("./models/model");
require("./models/post");//schema for creatpost 

// middleware
app.use(cors()); // to ensure cross origin resource sharing
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/createPost"));

//mongourl is file where all the details about username and password resides
mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to mongodb");
});

mongoose.connection.on("error", () => {
  console.log("Error during connection.");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
