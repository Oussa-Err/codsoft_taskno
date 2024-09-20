const express = require('express');
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const errorHandler = require("./Controllers/errorMiddleware");
const usersRoute = require("./Routes/usersRoute");
const jobsRoute = require("./Routes/jobsRoute");
const helmet = require("helmet");
const sanitize = require("express-mongo-sanitize");
const xss = require('xss-clean')
// const serverless = require('serverless-http');
const CustomError = require("./Utils/CustumErrorClass");
const rateLimit = require("express-rate-limit")

dotenv.config({ path: "backend/.env" });

const app = express();

mongoose.connect(process.env.MONGOOSE_STR)
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log("db connection failed: \n" + err));

// CORS middleware
app.use(cors({
    origin: 'https://jobify-taskno.netlify.app/',
    // uncomment the line below for local development
    // origin: 'http://localhost:5173',
    // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// set common security header responses
app.use(helmet());

// sanitize nosql inputs
app.use(sanitize());

// prevent xss attacks, clean any malicious code ..
app.use(xss())

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(bodyParser.json({ limit: "4mb" }));
app.use(bodyParser.urlencoded({
    limit: "7mb",
    extended: true
}));

// set limits to api calls to prevent bruteforce attack among many 
const rateLimiter = rateLimit({
    max: 3,
    windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 1000, // Limit each IP to 1000 requests per `window` (here, per 15 minutes).
    message: "we have received too many request from this ip, try after one hour"
})

app.use('/api', rateLimiter)


// Cookie parsing middleware
app.use(cookieParser());

app.use("/api/v1", usersRoute);
app.use("/api/v1", jobsRoute);

app.use("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "API is running...."
    });
});

// Custum error handling middleware
app.use(errorHandler);

// Fallback for unhandled routes
app.all("*", (req, res, next) => {
    next(new CustomError(`url ${req.originalUrl} not found`, 404));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// uncomment this to deploy it on aws lambda as a function, also uncomment required serveless-http 
// don't forget to comment the the listening starting server

// module.exports.handler = serverless(app);