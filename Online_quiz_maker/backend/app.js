const express = require("express")
const cors = require('cors')
const morgan = require('morgan')
const controller = require("./controller/quizController")

const app = express()
app.use(express.json({ limit: "2mb" }))
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())


app.get("/api/quizes", controller.getQuizes)


app.get('/', (req, res) => {
    try {
        res.json("Api running ...")
    } catch (error) {
        res.json(error)
    }
})

module.exports = app
