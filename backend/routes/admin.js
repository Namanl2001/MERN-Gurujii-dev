const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const admin = require('../middleware/admin');

router.get('/users', admin, adminController.getUsers);
router.get('/user/:id', admin, adminController.getUserById);

module.exports = router;
