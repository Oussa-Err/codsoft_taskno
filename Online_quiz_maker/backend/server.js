const mongoose = require('mongoose')
const dotenv = require('dotenv')

const server = require("./app")
dotenv.config({ path: "./.env" })



mongoose.connect(process.env.MONGO_URI_STR).then(() => {
    console.log("Database connected ...")
}).catch(error => {
    console.log("Invalid Database Connection")
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => {
    console.log(`Server running ... http://localhost:${PORT}`)
})

