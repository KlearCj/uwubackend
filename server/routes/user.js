const express = require('express');
const router = express.Router();
const {UsersCtrl}= require('../controllers')

router.post("/", UsersCtrl.signup)

module.exports = router