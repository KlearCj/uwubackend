const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
const URL= process.env.URL

//VER MANEJO DE ERRORES :D
const moviesRequest = {
  getPopularMovies: async () => {
    try {
      const res = await axios.get(`${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  },
  getTopRatedMovies: async ()=>{
    try {
      const res = await axios.get(`${URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  },
  getVideoMovie: async (movieId)=>{
    try {
      const res = await axios.get(`${URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  },
  getSimilarMovie: async (movieId)=>{
    try {
      const res = await axios.get(`${URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = moviesRequest;
