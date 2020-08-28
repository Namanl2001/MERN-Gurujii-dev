const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static("client/build"));

const url =
  process.env.MONGODB_URI ||
  "mongodb+srv://naman:naman@12345@cluster0.44im5.mongodb.net/project?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/build"));
}

// alert("server running");
