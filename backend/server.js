const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const { myCluster } = require('./config');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "client", "build")));
app.use('/', express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));

// set HTTP security headers
app.use(helmet());

//limit requests from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'To many request from this IP, please try again after an hour!',
});

app.use('/', limiter);

//data sanitization against noSQL query injection
app.use(mongoSanitize());

//data sanitization against xss
app.use(xss());

const url = myCluster;
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin');
const ContactUsRouter = require('./routes/contact');

//User Routes
app.use('/users', usersRouter);

//Admin Routes
app.use('/admin', adminRouter);

//Contact Route
app.use('/contactus', ContactUsRouter);

module.exports = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
