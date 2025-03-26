const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  opg: { type: String },
  bitewing: { type: String },
  cbct: { type: String },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Image', imageSchema);