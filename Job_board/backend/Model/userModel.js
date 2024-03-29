const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator")
const { ObjectId } = mongoose.Schema;

const jobsHistorySchema = new mongoose.Schema({
    // for job seekers applied jobs page
    title: {
        type: String,
        trim: true,
        maxlength: 70,
    },

    description: {
        type: String,
        trim: true
    },
    salary: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
    },
    user: {
        type: ObjectId,
        ref: "User",
        required: true
    },
    
    // for recruiters applicants history page
    email: {
        type: String,
        trim: true
    },
    fullName: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true })

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: [true, 'full name is required'],
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'e-mail is required'],
        unique: true,
        validate: [validator.isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        minlength: [6, 'password must have at least 8 characters']
    },
    jobsHistory: [jobsHistorySchema],
    role: {
        type: Number,
        default: 0
    },
    resume: {
        data: Buffer,
        contentType: String, 
        originalName: String,
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true }, timestamps: true })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (pwd) {
    return await bcrypt.compare(pwd, this.password)
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: 36000
    });
}

const User = mongoose.model("user", userSchema)

module.exports = User