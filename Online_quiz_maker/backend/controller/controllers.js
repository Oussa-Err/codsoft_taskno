const Quiz = require("../model/quizModel")
const CustomErr = require("../utils/CustomErrClass")

exports.getQuizzes = async (req, res, next) => {

    try {
        const quizzes = await Quiz.find({}, { title: 1 })

        res.status(200).json({
            status: "success",
            quizzes
        })
    } catch (error) {
        next(error)
    }
}

exports.getQuiz = async (req, res, next) => {
    const id = req.params.id

    try {
        const quiz = await Quiz.findById({ _id: id })
        if (!quiz) {
            return next(new CustomErr(`This Title: ${req.params.title} is not found`, 404))
        }

        res.status(200).json({
            status: "success!",
            quiz
        })
    } catch (error) {
        next(error)
    }
}

exports.createQuiz = async (req, res, next) => {
    const { quiz, title } = req.body


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
        console.log(error)
        next(error)
    }
}

exports.isAuth = async (req, res, next) => {
    const { username } = req.body
    if (!username) {
        return next(new CustomErr("you must login first!", 401))
    }
    next()
}