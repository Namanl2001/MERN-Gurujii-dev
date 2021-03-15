const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const auth = require("./routes/auth");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const { username, pass, myCluster } = require('./config');
require("dotenv").config();

//database
require("./models/githubUser");
//github authentication
require("./passport/githubConfig");

//MONGOOSE CONNECTION
// mongoose.connect(process.env.MONGODB_URI,
//   {useNewUrlParser: true,useUnifiedTopology: true},
//   (err)=>{
//     if(!err)
//       console.log("database connected successfully");
//     else
//       console.log("error while connecting DB: ",err);  
//   }
// )

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// express sessions
app.use(session({
  secret: "guruji",
  resave: false,
  saveUninitialized : false,
}))

app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "client", "build")));
app.use("/", express.static("./public"));
app.use(express.static(path.join(__dirname, "public")));

const url =
  `mongodb+srv://${username}:${pass}${myCluster}.mongodb.net/project?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require("./routes/users");

app.use("/users", usersRouter);
app.use("/",auth);
app.get("/succes", (req,res)=>{
  res.send("successfully signed-in using github");
})
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
