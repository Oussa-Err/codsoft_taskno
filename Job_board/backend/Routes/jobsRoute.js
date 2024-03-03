const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/jobController")
const { isloggedIn, isAdmin } = require("../Controllers/authController")

router.route('/jobs').get(controllers.getJobs);

router.route('/job/:id').get(controllers.getJob);

router.route('/create').post(isloggedIn, isAdmin, controllers.createJob);

router.route('/delete/:id').get(isloggedIn, isAdmin, controllers.deleteJob);

module.exports = router