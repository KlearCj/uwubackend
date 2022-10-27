const {moviesRequest}= require('../services/index')

const MoviesCtrl={
  getPopMovies: async (req, res)=>{
    const {data, err}=  await moviesRequest.getPopularMovies()
    if(err) return data.sendStatus();
    res.send(data)
  },
  getTopRatedMovies: async (req, res)=>{
    const {data, err}=  await moviesRequest.getTopRatedMovies()
    if(err) return data.sendStatus();
    res.send(data)
  },
  getVideoMovies: async (req, res)=>{ //RECORDAR ENVIAR EN PARAMS :D
    const {data, err}=  await moviesRequest.getVideoMovie(7889)
    if(err) return data.sendStatus();
    res.send(data)
  },
  getSimilarMovies: async (req, res)=>{ //RECORDAR ENVIAR EN PARAMS :D
    const {data, err}=  await moviesRequest.getSimilarMovie(7889)
    if(err) return data.sendStatus();
    res.send(data)
  }

}
module.exports= MoviesCtrl