const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  sex: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  registrationNo: { type: String, required: true },
  dateOfVisit: { type: String, required: true },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Patient', patientSchema);