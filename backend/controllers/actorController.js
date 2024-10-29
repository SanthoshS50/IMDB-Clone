// actorController.js
const Actor = require('../models/actor');

exports.createActor = async (req, res) => {
  try {
    const actor = new Actor(req.body);
    await actor.save();
    res.status(201).json(actor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllActors = async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Additional CRUD methods (update, delete) can be implemented similarly
