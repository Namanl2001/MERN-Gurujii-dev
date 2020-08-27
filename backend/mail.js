var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "namanlakhwaninl@gmail.com",
    pass: "naman@12345",
  },
});

var mailOptions = {
  from: "namanlakhwaninl@gmail.com",
  to: "namanlakhwani@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
