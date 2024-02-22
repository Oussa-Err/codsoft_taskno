const mongoose = require("mongoose")


const jobSchema = new mongoose.Schema({
    name: String,
    description: String,
    recruiter_name: String,
    releas_date: Date
})


const db = "jobs"

const Job = mongoose.model("jobs", jobSchema, db)

module.exports = Job