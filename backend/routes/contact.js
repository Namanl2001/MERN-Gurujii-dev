const express = require('express');
const { sendMail } = require('../controllers/contactUs');
const router = express.Router();
const app = express();

app.use(express.json());

router.post('/sendmail', sendMail);
module.exports = router;
