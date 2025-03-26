const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationNo: { type: String, required: true },
  state: { type: String, required: true },
  address: { type: String, required: true },
  profilePic: { type: String },
});

module.exports = mongoose.model('User', userSchema);