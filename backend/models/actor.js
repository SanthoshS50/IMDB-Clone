// actor.js
const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  bio: String,
});

module.exports = mongoose.model('Actor', actorSchema);
