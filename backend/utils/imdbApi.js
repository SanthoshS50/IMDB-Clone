// imdbApi.js
const axios = require('axios');

const fetchMovieDataFromIMDb = async (movieName) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?t=${movieName}&apikey=${process.env.IMDB_API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching IMDb data:', error.message);
    return null;
  }
};

module.exports = fetchMovieDataFromIMDb;
