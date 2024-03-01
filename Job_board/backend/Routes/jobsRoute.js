const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/jobController")

router.route('/jobs').get(controllers.getJobs);

router.route('/job/:id').get(controllers.getJob);

router.route('/create').post(controllers.createJob);

router.route('/delete/:id').get(controllers.deleteJob);

module.exports = router