const Quiz = require("../functions/model/quizModel")
const CustomErr = require("../functions/utils/CustomErrClass")

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
            return next(new CustomErr(`This ID: ${req.params.id} is not found`, 404))
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
    const { title, quiz, createdByEmail } = req.body

    if (!createdByEmail) {
        return next(new CustomErr("you must login first!", 401))
    }

    try {
        const newQuiz = await Quiz.create({
            title,
            quiz,
            createdByEmail
        })

        res.status(201).json({
            status: 'success',
            newQuiz
        })
    } catch (error) {
        next(error)
    }
}

exports.isAuth = async (req, res, next) => {
    const { createdbyemail } = req.headers;
    const createdByEmail = createdbyemail
    if (!createdByEmail) {
        return next(new CustomErr("you must login first!", 401))
    }
    next()
}