const CustomErr = require("../utils/CustomErrClass")
const dotenv = require("dotenv")
dotenv.config({ path: "../.env" })


const devErr = (res, err) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stackTrace: err.stack,
        err: err
    })
}

const prodErr = (res, err) => {
    
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        })
    } else {
        res.status(500).json({
            status: "error",
            message: "Error unknown, please try again later"
        })
    }
}


const validationError = (err) => {
    const errObj = err.errors
    for (const key in errObj) {
        return new CustomErr(errObj[key].message, 400)
    }
}

const duplicateKeyErr = (err) => {
    let message
    if (err.keyValue.title) message = new CustomErr(`This title already exists: ${err.keyValue.title}`, 400)

    return message
}

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || "error"

    if (process.env.NODE_ENV === "development") {
        devErr(res, err)
    }

    if (process.env.NODE_ENV === "production") {

        if (err.name === "ValidationError") err = validationError(err)
        if (err.code === 11000) err = duplicateKeyErr(err)

        prodErr(res, err)
    }
}