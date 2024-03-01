const Job = require("../Model/jobModel")
const CustomErr = require('../Utils/CustumErrorClass');

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

exports.getJob = async (req, res, next) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

exports.createJob = async (req, res, next) => {
    try {
        const job = await Job.create({
            title: req.body.title,
            description: req.body.description,
            salary: req.body.salary,
            location: req.body.location,
            user: req.user.id
        });
        res.status(201).json({
            success: true,
            job
        })
    } catch (error) {
        next(error);
    }
}

exports.deleteJob = async (req, res, next) => {
    try {
        await Job.findByIdAndDelete(req.params.job_id);
        res.status(200).json({
            success: true,
            message: "job deleted."
        })
    } catch (error) {
        next(error);
    }
}
