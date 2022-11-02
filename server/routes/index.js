const express = require("express");
const router = express.Router();
const movies = require("./movies");
const tvShows = require("./tvshows");
const user= require('./user')

router.use("/movies", movies);
router.use("/tv", tvShows);
router.use("/user", user)

module.exports = router;
