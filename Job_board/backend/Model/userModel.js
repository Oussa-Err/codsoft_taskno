const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,

    },
    status: { type: String, default: "user" }
})

const collection = "job_Board"
const User = mongoose.Model("User", userSchema, collection)

const user = DB.insert({name: "chelou"})
console.log(user)

module.exports = User