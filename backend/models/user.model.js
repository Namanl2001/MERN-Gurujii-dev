const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  title: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
  },
  subject: {
    type: String,
    trim: true,
    required: true,
  },
  tutor: {
    type: String,
    trim: true,
    required: true,
  },
  coaching: {
    type: String,
    trim: true,
    required: true,
  },
  qualification: {
    type: String,
    trim: true,
    required: true,
  },
  about: {
    type: String,
    trim: true,
    required: true,
  },
  class1: {
    type: Number,
    min: 9,
    max: 12,
    trim: true,
    required: true,
  },
  class2: {
    type: Number,
    min: 9,
    max: 12,
    trim: true,
  },

  class3: {
    type: Number,
    min: 9,
    max: 12,
    trim: true,
  },
  class4: {
    type: Number,
    min: 9,
    max: 12,
    trim: true,
  },

  address: {
    type: String,
    trim: true,
    required: true,
  },
  city: {
    type: String,
    trim: true,
    required: true,
  },
  pin: {
    type: Number,
    min: 100000,
    max: 999999,
    trim: true,
    required: true,
  },
  phone: {
    type: Number,
    min: 1000000000,
    max: 9999999999,
    trim: true,
    required: true,
  },
  profilePic: {
    type: String,
    trim: true,
    default: '',
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  popularity: {
    type: Number,
    trim: true,
    default: 0,
  },
});

module.exports = mongoose.model('User', userSchema);
