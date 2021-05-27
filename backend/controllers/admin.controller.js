const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

// @desc    Get all users
// @route   GET /admin/users
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

// @desc    Get  user by Id
// @route   GET /admin/user/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json('User not found!!');
  }
});

module.exports = adminController = {
  getUsers,
  getUserById,
};
