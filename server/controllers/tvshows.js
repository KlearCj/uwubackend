const {tvRequest}= require('../services/index')

const TvCtrl={
  getPopTv: async (req, res)=>{
    const {data, err}=  await tvRequest.getPopularShows()
    if(err) return data.sendStatus();
    res.send(data)
  },
  getTopRatedTv: async (req, res)=>{
    const {data, err}=  await tvRequest.getTopRatedTv()
    if(err) return data.sendStatus();
    res.send(data)
  },
  getVideoTv: async (req, res)=>{//r¡RECORDAR ENVIAR EL ID 
    const {data, err}=  await tvRequest.getVideoTv(7889)
    if(err) return data.sendStatus();
    res.send(data)
  },
  getSimilarTv: async (req, res)=>{//r¡RECORDAR ENVIAR EL ID 
    const {data, err}=  await tvRequest.getSimilarTv(7889)
    if(err) return data.sendStatus();
    res.send(data)
  }
}
module.exports= TvCtrl