const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/jobsController")

router.route('/jobs').get(controllers.getJobs);

module.exports = router