const { pass } = require('../config');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'namanlakhwaninl@gmail.com',
    pass: `${pass}`,
  },
});

exports.sendMail = (req, res) => {
  const { name, email, message, subject } = req.body;

  const options = {
    from: `${email}`,
    to: 'namanlakhwaninl@gmail.com',
    subject: `${subject}`,
    text: `From : ${name}, Message : ${message}`,
  };

  transporter.sendMail(options, err => {
    if (err) {
      console.log(err);
      res.status(500).json({
        message: 'server error occured!',
      });
    } else {
      console.log('message sent');

      res.status(200).json({
        message: 'feedback sent successful',
      });
    }
  });
};
