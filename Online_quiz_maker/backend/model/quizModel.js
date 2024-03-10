const mongoose = require("mongoose")

const questionModel = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answers: {
        type: [String],
        required: true,
    },
    correctAnswer: {
        type: String,
        required: true
    }
})

const quizModel = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    quiz: {
        type: [questionModel],
        validate: {
            validator: function (v) {
                return v.length === 5;
            },
            message: `5 questions in a quiz`,
        }
    }
}, { timestamps: true })

const Quiz = mongoose.model("Quiz", quizModel)

module.exports = Quiz