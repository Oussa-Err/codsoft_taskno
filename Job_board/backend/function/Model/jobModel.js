const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema;

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        maxlength: 70,
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'Description is required'],
    },
    salary: {
        type: String,
        trim: true,
        required: [true, 'Salary is required'],
    },
    location: {
        type: String,
    },
    available: {
        type: Boolean,
        default: true
    },
    recruiter: {
        type: ObjectId,
        ref: "user",
        required: true
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true })

const Job = mongoose.model("job", jobSchema)

module.exports = Job