// producer.js
const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  bio: String,
});

module.exports = mongoose.model('Producer', producerSchema);
