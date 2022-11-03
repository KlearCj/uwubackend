const express = require('express');
const router = express.Router();
const {UsersCtrl}= require('../controllers')

router.post("/", UsersCtrl.signup)
router.post("/log", UsersCtrl.login)
router.post("/out", UsersCtrl.logout)
router.put("/update", UsersCtrl.updateUser)

module.exports = router