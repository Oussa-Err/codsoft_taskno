const express = require('express')
const dotenv = require("dotenv")
const morgan = require("morgan")
const mongoose = require("mongoose")
const userRoute = require("./Routes/usersRoute")
dotenv.config({ path: "backend/.env" })

const app = express()
app.use(morgan("dev"))

mongoose.connect(process.env.MONGOOSE_STR)
    .then((connection) => {console.log("DB connection successfully")})
    .catch(err => console.log("db connection failed " + err))

console.log(userRoute)
app.use("/users", userRoute)

app.use("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "hello world"
    })
})


const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("Server started ")
})

module.exports = app