// app.js
const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movieRoutes');
const actorRoutes = require('./routes/actorRoutes');
const producerRoutes = require('./routes/producerRoutes');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/movies', movieRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/producers', producerRoutes);

module.exports = app;

app.get('/', (req, res) => {
    res.send('Server is running!');
  });