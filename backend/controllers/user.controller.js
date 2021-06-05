let User = require('../models/user.model');
var nodemailer = require('nodemailer');
const { pass } = require('../config');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

var upload = multer({ storage }).single('file');

// Fetch All Users from the DB
const fetchAllUsers = (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })

    .catch(err => res.status(400).json('Error: ' + err));
};

// Fetch a user document based on the email passed
const fetchUserByEmail = (req, res) => {
  User.findOne({ email: req.params.email })
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
};

// Add new user document to db
const addNewUser = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json('there is some error');
    } else if (err) {
      return res.status(500).json(err);
    }
    var profilePic = '';
    if (req.file !== undefined) {
      profilePic = req.file.filename;
    } else {
      profilePic = '';
    }
    const newUser = new User({
      email: req.body.email,
      title: req.body.title,
      username: req.body.userName,
      subject: req.body.subject,
      tutor: req.body.tutor,
      coaching: req.body.coachingName,
      qualification: req.body.qualification,
      about: req.body.about,
      class1: req.body.c1,
      class2: req.body.c2,
      class3: req.body.c3,
      class4: req.body.c4,
      address: req.body.address,
      city: req.body.city,
      pin: req.body.pin,
      phone: req.body.phone,
      isAdmin: req.body.isAdmin,
      profilePic,
      popularity: '0',
    });

    newUser.save(function (err) {
      if (err) {
        console.log('error occured');
        return res.status(400).json('Error: ' + err);
      }
      console.log('user added');
      return res.status(200).json('profile added');
    });
  });
};

// Update existing user document to the db
const updateUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.title = req.body.title;
      user.username = req.body.userName;
      user.subject = req.body.subject;
      user.tutor = req.body.tutor;
      user.coaching = req.body.coachingName;
      user.qualification = req.body.qualification;
      user.about = req.body.about;
      user.class1 = req.body.c1;
      user.class2 = req.body.c2;
      user.class3 = req.body.c3;
      user.class4 = req.body.c4;
      user.address = req.body.address;
      user.city = req.body.city;
      user.pin = req.body.pin;
      user.phone = req.body.phone;
      //user.profilePic = req.file.filename;

      user
        .save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// Update user popularity
const updateUserPopularity = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.popularity = req.body.popularity;
      user
        .save()
        .then(() => res.status(200).json('Popularity updated!'))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// Delete existing user document on basis of ID
const deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Profile deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
};

// Emailer
const sendEmail = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'namanlakhwaninl@gmail.com',
      pass: `${pass}`,
    },
  });

  let mailOptions;

  if (req.params.c == 1) {
    mailOptions = {
      from: 'namanlakhwaninl@gmail.com',
      to: req.params.email,
      subject: 'GuruJii.com',
      text:
        'Greetings from GuruJii.com !!. We are glad to see you and will try to serve our great and best services to you. \n\nThanks and regards \nNaman Lakhwani ',
    };
  }

  if (req.params.c == 2) {
    mailOptions = {
      from: 'namanlakhwaninl@gmail.com',
      to: req.params.email,
      subject: 'GuruJii.com',
      text:
        'It is very disheartening to see you leave. We hope that you liked our service and would come back again. \n\nThanks and regards \nNaman Lakhwani',
    };
  }

  transporter.sendMail(mailOptions, function (error) {
    if (error) {
      res.status(400).json('Error: ' + error);
    } else {
      res.json('Email sent!');
    }
  });
};

module.exports = {
  fetchAllUsers,
  fetchUserByEmail,
  addNewUser,
  updateUser,
  deleteUser,
  sendEmail,
  updateUserPopularity,
};
