const express = require("express");
const router = express.Router();
const { MoviesCtrl } = require("../controllers");

router.get("/popular", MoviesCtrl.getPopMovies);
router.get("/top_rated", MoviesCtrl.getTopRatedMovies);
router.get("/video", MoviesCtrl.getVideoMovies);
router.get("/similar", MoviesCtrl.getSimilarMovies);

module.exports = router;
