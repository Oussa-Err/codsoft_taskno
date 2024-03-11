const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const controller = require("./controller/controllers")
const globalErrorHandler = require("./controller/globalErrorHandler")
const CustomErr = require("./utils/CustomErrClass")

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


app.get("/api/quizzes", controller.getQuizzes)
app.get("/api/quiz/:id", controller.isAuth, controller.getQuiz)
app.post("/api/create", controller.createQuiz)

app.get('/', (req, res) => {
    try {
        res.json("Api is running ...")
    } catch (error) {
        res.json(error)
    }
})

app.all('*', (req, res, next) => {
    const err = new CustomErr(`can't find ${req.originalUrl} on the server`, 404)
    next(err)
})

app.use(globalErrorHandler)

module.exports = app
