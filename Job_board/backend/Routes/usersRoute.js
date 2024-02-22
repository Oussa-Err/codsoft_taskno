const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/authController")


router.route("/").get(controllers.getUsers)


module.exports = router