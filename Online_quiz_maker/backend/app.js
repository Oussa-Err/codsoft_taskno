const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const controller = require("./controller/controllers")
const globalErrorHandler = require("./controller/globalErrorHandler")

const app = express()
app.use(express.json({ limit: "2mb" }))
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())


app.get("/api/quizes", controller.getQuizes)
app.post("/api/create", controller.createQuiz)

app.get('/', (req, res) => {
    try {
        res.json("Api running ...")
    } catch (error) {
        res.json(error)
    }
})

app.use(globalErrorHandler)

module.exports = app
