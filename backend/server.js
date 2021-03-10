const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // bodyParser is deprecated and can be avoided
const path = require("path");
require("dotenv").config();
const usersRouter = require("./routes/users");
const { username, pass, myCluster } = require("./config");

const app = express();
const port = process.env.PORT || 5000;

// these can abe avoided beacuse of deprecation of bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/", express.static("./public"));
app.use(express.static(path.join(__dirname, "public")));

const url = `mongodb+srv://${username}:${pass}${myCluster}.mongodb.net/mern-guruji?retryWrites=true&w=majority`;

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// for handling connection errors, use try-catch with async/await.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connectDB();

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
