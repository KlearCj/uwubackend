const express = require("express")
const router = express.Router()
const {TvCtrl}=require("../controllers")


router.get("/popular", TvCtrl.getPopTv)
router.get("/top_rated", TvCtrl.getTopRatedTv)
router.get("/video", TvCtrl.getVideoTv)
router.get("/similar", TvCtrl.getSimilarTv)

module.exports= router