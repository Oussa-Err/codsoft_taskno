const Job = require("../Model/jobModel")

exports.getJobs = async (req, res, next) => {
    const jobs = await Job.find({})

    res.status(200).json({
        status: "success!",
        message: jobs
    })
}