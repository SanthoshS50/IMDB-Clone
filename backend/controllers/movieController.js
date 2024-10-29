// movieController.js
const Movie = require('../models/movie');

exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate('actors producer');
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Additional CRUD methods (update, delete) can be implemented similarly
