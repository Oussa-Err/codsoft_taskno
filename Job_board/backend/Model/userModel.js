const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
    },
    status: String
})

const collection = "users"

const User = mongoose.model("User", userSchema, collection)

module.exports = User