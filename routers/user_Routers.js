
const express = require("express");
const Router = express.Router()
const user = require('../controller/userController')

Router.post ('/registeruser', user.userSiginup)

module.exports = Router


