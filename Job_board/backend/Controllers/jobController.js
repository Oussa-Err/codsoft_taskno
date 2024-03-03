const Job = require("../Model/jobModel")

exports.getJobs = async (req, res, next) => {
    const keyword = req.query.keyword ? {
        title: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}

    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const count = await Job.find({ ...keyword }).countDocuments();
    try {
        const jobs = await Job.find({ ...keyword }).sort({ createdAt: -1 })
            .skip(pageSize * (page - 1))
            .limit(pageSize)
            
        res.status(200).json({
            success: true,
            jobs,
            page,
            pages: Math.ceil(count / pageSize),
            count,
        })
    } catch (error) {
        console.log(error)
        next(error);
    }
}

exports.getJob = async (req, res, next) => {
    console.log(req.params.id)
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
            recruiter: req.user.id
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
