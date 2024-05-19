// import app from server to run it locally
const express = require('express')
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser");
const errorHandler = require("./Controllers/errorMiddleware")
const usersRoute = require("./Routes/usersRoute")
const jobsRoute = require("./Routes/jobsRoute")
const serverless = require('node-appwrite');

// Init appwrite serverless functions SDK
const client = new serverless.Client();

dotenv.config({ path: "backend/.env" })

const app = express()

mongoose.connect(process.env.MONGOOSE_STR)
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log("db connection failed: \n" + err))

app.use(morgan("dev"))
app.use(bodyParser.json({ limit: "4mb" }));
app.use(bodyParser.urlencoded({
    limit: "7mb",
    extended: true
}));

app.use(cookieParser());
app.use(cors({
    origin: ['https://jobify-taskno.netlify.app', 'http://localhost:5173'],
    credentials: true,
}))

app.use("/api/v1", usersRoute)
app.use("/api/v1", jobsRoute)

app.use("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "API is running...."
    })
})

app.use(errorHandler)

const functions = new serverless.Functions(client);

client
    .setEndpoint('http://664a33dee4ab01dcfa71.appwrite.global') // Your API Endpoint
    .setProject('664a14160006840aa15e') // Your project ID

const promise = functions.createExecution(
    '664a33de0004de3efecc',  // functionId
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
