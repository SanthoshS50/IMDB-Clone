// producerController.js
const Producer = require('../models/producer');

exports.createProducer = async (req, res) => {
  try {
    const producer = new Producer(req.body);
    await producer.save();
    res.status(201).json(producer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllProducers = async (req, res) => {
  try {
    const producers = await Producer.find();
    res.json(producers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Additional CRUD methods (update, delete) can be implemented similarly
