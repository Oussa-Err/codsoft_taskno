const mongoose = require("mongoose")
 
const questionModel = new mongoose.Schema({
    questions: { type : Array, default: []},
    answers : { type : Array, default: []},
})

const quizModel = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    quiz: [questionModel]
}, {timestamps: true})
 
const Quiz = mongoose.model("Quiz", quizModel)

module.exports = Quiz