const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const githubUserSchema = new Schema({
    githubId: String
})
module.exports = mongoose.model("githubusers",githubUserSchema);