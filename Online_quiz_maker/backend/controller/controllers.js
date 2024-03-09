const Quiz = require("../model/quizModel")
const CustomErr = require("../utils/CustomErrClass")

exports.getQuizes = async (req, res, next) => {
    const { username } = req.body

    if (!username) {
        return next(new CustomErr("you must login first!", 401))
    }

    try {
        const quizes = await Quiz.find({})

        res.status(200).json({
            status: "success",
            quizes
        })
    } catch (error) {
        next(error)
    }
}

exports.createQuiz = async (req, res, next) => {
    const { username, quiz, title } = req.body
    console.log(quiz.length)

    if (!username) {
        return next(new CustomErr("you must login first!", 401))
    }

    try {
        const newQuiz = new Quiz({ 
            title,
            quiz
         });

        const savedQuiz = await newQuiz.save();

        res.status(201).json({
            status: 'success',
            savedQuiz
        })
    } catch (error) {
        next(error)
    }
}