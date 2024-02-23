const express = require('express')
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser");
const errorHandler = require("./Controllers/errorMiddleware")
const userRoute = require("./Routes/usersRoute")
dotenv.config({ path: "backend/.env" })

const app = express()
app.use(morgan("dev"))
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({
  limit: "7mb",
  extended: true
}));

mongoose.connect(process.env.MONGOOSE_STR)
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log("db connection failed: \n" + err))

app.use("/api/v1", userRoute)

app.use("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "API is running...."
    })
})

app.all("*", (req, res, next) => {
    next(new CustomError(`url ${req.originalUrl} not found`, 404))
  })

app.use(errorHandler)

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log("Server running ...")
})

module.exports = app