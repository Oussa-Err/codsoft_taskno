const express = require("express")
const mongoose = require('mongoose')
const router = express.Router()
const controller = require("./controller/controllers")
const globalErrorHandler = require("./controller/globalErrorHandler")
const morgan = require('morgan')
const cors = require('cors')
const CustomErr = require("./utils/CustomErrClass")
const serverless = require('serverless-http')

const dotenv = require('dotenv')
dotenv.config({ path: "./.env" })

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

mongoose.connect(process.env.MONGO_URI_STR).then(() => {
    console.log("Database connected ...")
}).catch(error => {
    console.log("Invalid Database Connection %", error)
})

app.get('/', (req, res) => {
    try {
        res.json("Api is running ...")
    } catch (error) {
        res.json(error)
    }
})

router.get("/quizzes", controller.getQuizzes)
router.get("/quiz/:id", controller.isAuth, controller.getQuiz)
router.post("/create", controller.createQuiz)

app.use(globalErrorHandler)

app.use('/.netlify/functions/api', router)
module.exports.handler = serverless(app);
