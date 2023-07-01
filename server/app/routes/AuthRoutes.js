const express = require('express')
const router = express.Router()
const { register, login, getMe } = require("../controllers/AuthController");
const {checkUser} = require("../middlewares/auth")
router.post('/',register)
router.post('/login',login)
router.get('/getMe',checkUser,getMe)

module.exports=router