const Quiz = require("../model/quizModel")

exports.getQuizes = async (req, res, next) => {
    console.log("executed ..")
    try {
        const quizes = await Quiz.find({})
        
        res.status(200).json({
            status: "success",
            quizes
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}