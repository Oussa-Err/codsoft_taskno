const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/authController")

router.route('/login').post(controllers.login);

router.route('/signup').post(controllers.signup);

module.exports = router