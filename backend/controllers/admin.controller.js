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

// @desc    Delete user
// @route   DELETE /admin/user/:id
// @access  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: 'User removed' });
  } else {
    res.status(404).json('User not found!!');
  }
});

// @desc    Update user
// @route   PUT /admin/user/:id
// @access  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.title = req.body.title || user.title;
    user.username = req.body.username || user.username;
    user.subject = req.body.subject || user.subject;
    user.tutor = req.body.tutor || user.tutor;
    user.coaching = req.body.coaching || user.coaching;
    user.qualification = req.body.qualification || user.qualification;
    user.class1 = req.body.class1 || user.class1;
    user.class2 = req.body.class2 || user.class2;
    user.class3 = req.body.class3 || user.class3;
    user.class4 = req.body.class4 || user.class4;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;

    const updatedUser = await user.save();

    res.json({
      title: updatedUser.title,
      username: updatedUser.username,
      subject: updatedUser.subject,
      tutor: updatedUser.tutor,
      coaching: updatedUser.coaching,
      qualification: updatedUser.qualification,
      class1: updatedUser.class1,
      class2: updatedUser.class2,
      class3: updatedUser.class3,
      class4: updatedUser.class4,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404).json('User not found!!');
  }
});
module.exports = adminController = {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
