const express = require('express');
const Patient = require('../models/Patient');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const patients = await Patient.find({ doctorId: decoded.id });
    res.json(patients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;