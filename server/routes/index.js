const express= require("express");
const router= express.Router();
const movies = require("./movies")
const tvShows= require("./tvshows")


router.use("/movies", movies)
router.use("/tv", tvShows)


module.exports= router
