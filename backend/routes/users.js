const router = require("express").Router();
var nodemailer = require("nodemailer");
let User = require("../models/user.model");
const { pass } = require("../config");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:email").get((req, res) => {
  User.findOne({ email: req.params.email })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const username = req.body.userName;
  const subject = req.body.subject;
  const coaching = req.body.coachingName;
  const qualification = req.body.qualification;
  const about = req.body.about;
  const class1 = req.body.c1;
  const class2 = req.body.c2;
  const class3 = req.body.c3;
  const class4 = req.body.c4;
  const address = req.body.address;
  const city = req.body.city;
  const pin = req.body.pin;
  const phone = req.body.phone;

  const newUser = new User({
    email,
    username,
    subject,
    coaching,
    qualification,
    about,
    class1,
    class2,
    class3,
    class4,
    address,
    city,
    pin,
    phone,
  });

  newUser
    .save()
    .then(() => {
      res.json("User added!");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      user.username = req.body.userName;
      user.subject = req.body.subject;
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

      user
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/delete/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("Profile deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/sendMail/:email/:c").get((req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "namanlakhwaninl@gmail.com",
      pass: `${pass}`,
    },
  });

  if (req.params.c == 1) {
    var mailOptions = {
      from: "namanlakhwaninl@gmail.com",
      to: req.params.email,
      subject: "GuruJii.com",
      text:
        "Greetings from GuruJii.com !!. We are glad to see you and will try to serve our great and best services to you. \n\nThanks and regards \nNaman Lakhwani ",
    };
  }

  if (req.params.c == 2) {
    var mailOptions = {
      from: "namanlakhwaninl@gmail.com",
      to: req.params.email,
      subject: "GuruJii.com",
      text:
        "It is very disheartening to see you leave. We hope that you liked our service and would come back again. \n\nThanks and regards \nNaman Lakhwani",
    };
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      res.status(400).json("Error: " + error);
    } else {
      res.json("Email sent!");
    }
  });
});

module.exports = router;
