const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;
const URL= process.env.URL

const tvRequest = {
  getPopularShows: async () => {
    try {
      const res = await axios.get(`${URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  },
  getTopRatedTv: async ()=>{
    try {
      const res = await axios.get(`${URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  },
  getVideoTv: async (tvId)=>{
    try {
      const res = await axios.get(`${URL}/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  },
  getSimilarTv: async (tvId)=>{
    try {
      const res = await axios.get(`${URL}/tv/${tvId}/similar?api_key=${API_KEY}&language=en-US&page=1`);
      return { data: res.data, err: false };
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = tvRequest;