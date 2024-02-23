const Job = require("../Model/jobModel")
const CustumErrorClass = require('../Utils/CustumErrorClass');

exports.getJobs = async (req, res, next) => {
    const jobs = await Job.find({})
    try {
        res.status(200).json({
            status: "success!",
            message: jobs
        })
    } catch (error) {
        next(error)
    }
}