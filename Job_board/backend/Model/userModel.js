const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator")

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
        minlength: [6, 'password must have at least (8) characters']
    },

    role: {
        type: Number,
        default: 0
    }
}, { toJSON: { virtuals: true }, toObject: { virtuals: true } })

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this.id }, process.env.JWT_PRIVATE_KEY, {
        expiresIn: 3600
    });
}

const User = mongoose.model("User", userSchema)

module.exports = User