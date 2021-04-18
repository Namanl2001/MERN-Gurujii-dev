var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '<senderEmailId>',
    pass: '<password>',
  },
});

var mailOptions = {
  from: '<senderEmailId>',
  to: '<receiverEmailId>',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
