const express = require('express')
const dotenv = require("dotenv")
const morgan = require("morgan")
const mongoose = require("mongoose")
dotenv.config({ path: "./.env" })

const app = express()
app.use(morgan("dev"))

console.log()
mongoose.connect(process.env.MONGOOSE_STR).then(() => {
}).catch(err => console.log("db connection failed "))


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