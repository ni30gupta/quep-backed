const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UserRoute = require("./routes/Users");
const cors = require("cors");
require("dotenv").config();

// Create express app
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// Database
// mongoose.connect("mongodb://localhost/test1", {});
mongoose.connect(
  "mongodb+srv://nitish:ni3012345@cluster0.kpp5v.mongodb.net/test1?retryWrites=true&w=majority",
  {}
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB database...");
});

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/users", UserRoute);

// Starting server
app.listen(process.env.PORT || 5005, console.log("server running"));
