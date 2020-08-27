const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
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
    type: String,
    trim: true,
    required: true,
  },
  class2: {
    type: String,
    trim: true,
  },
  class3: {
    type: String,
    trim: true,
  },
  class4: {
    type: String,
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
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
