const express = require('express');
const Image = require('../models/Image');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

router.post('/upload', upload.fields([{ name: 'opg' }, { name: 'bitewing' }, { name: 'cbct' }]), async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const image = new Image({
      opg: req.files.opg ? `/uploads/${req.files.opg[0].filename}` : null,
      bitewing: req.files.bitewing ? `/uploads/${req.files.bitewing[0].filename}` : null,
      cbct: req.files.cbct ? `/uploads/${req.files.cbct[0].filename}` : null,
      doctorId: decoded.id,
    });

    await image.save();
    res.json({ msg: 'Images uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;