const Job = require("../Model/jobModel");
const User = require("../Model/userModel");
const CustomErr = require("../Utils/CustumErrorClass");
const sendJobApplicationEmail = require("../Utils/sendJobApplicationEmail")

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
        next(error);
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

exports.resumeUpload = async (req, res, next) => {
    try {
        const fileName = req.file.originalname;
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { 'resume.data': req.file.buffer, 'resume.contentType': req.file.mimetype, 'resume.originalName': fileName },
            { new: true }
        );

        res.status(200).json({
            success: true,
            fileName: updatedUser.resume.originalName
        });
    } catch (error) {
        next(error);
    }
};

exports.jobApplication = async (req, res, next) => {

    if (!req.user.resume.originalName) {
        return next(new CustomErr("You must upload a resume first.\nCheck your profile page", 401));
    }

    const { title, description, salary, location, recruiter_id } = req.body;
    console.log(body)

    try {
        const currentUser = await User.findOne({ _id: req.user._id });
        const jobRecruiter = await User.findById(recruiter_id)

        if (!currentUser) {
            return next(new CustomErr("You must log in", 401));
        }

        if (currentUser.role === 0) {
            //applicant jobHistory update
            const addJobHistory = {
                title,
                description,
                salary,
                location,
                user: req.user._id
            };

            currentUser.jobsHistory.push(addJobHistory);
            await currentUser.save();
            const jobTitle = title;

            const emailSent = await sendJobApplicationEmail(currentUser.email, jobTitle, currentUser.fullName);
            if (!emailSent) {
                return next(new CustomErr("Failed to send job application email. Try again later.", 500))
            }

            //recruiter jobHistory update
            const { email, fullName } = currentUser
            const applicant = {
                email,
                fullName,
                title
            }
            jobRecruiter.jobsHistory.push(applicant);
            await jobRecruiter.save();

        } else if (currentUser.role === 1) {
            return next(new CustomErr("You are a recruiter remember?", 400))
        }

        res.status(200).json({
            success: true,
            currentUser,
        });

    } catch (error) {
        next(error);
    }
}