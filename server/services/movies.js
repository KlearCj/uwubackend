const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

const moviesRequest = {
  getPopMovies: async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=3e9bf10c4b9da58346377bed9363e958&language=en-US&page=1`
      );
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = moviesRequest;
