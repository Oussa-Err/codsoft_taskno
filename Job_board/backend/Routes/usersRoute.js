const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/authController")

router.route('/login').post(controllers.login);

router.route('/signup').post(controllers.signup);

router.route('/logout').get(controllers.logout) ;

router.route('/me').get(controllers.isloggedIn, controllers.personalInfo);

module.exports = router