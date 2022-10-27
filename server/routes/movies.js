const express = require("express")
const router = express.Router()
const MoviesCtrl =require("../controllers")
//Le quite las llaves but no funciona :C

router.get("/popular", MoviesCtrl.getPopMovies)

module.exports= router