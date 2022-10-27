const moviesRequest= require('../services/index')

const MoviesCtrl={
getPopMovies: async (req, res)=>{
  const {data, err}=  await moviesRequest.getPopMovies()
  if(err) return data.sendStatus();
  
   res.send(data)
}
}
module.exports= MoviesCtrl