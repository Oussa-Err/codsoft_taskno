const express = require('express')
const dotenv = require("dotenv")
dotenv.config({path: "./.env"})

const app = express()

app.use("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "hello world"
    })
})

const port = process.env.PORT || 8080

app.listen(port, (err) => {
    console.log(err)
})