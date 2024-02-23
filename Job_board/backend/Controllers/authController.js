const User = require("../Model/userModel")
const CustumErrorClass = require('../Utils/CustumErrorClass');

// signup
exports.signup = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
        return next(new CustumErrorClass("E-mail already registred", 400));
    }
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            success: true,
            user
        })
    } catch (error) {
        next(error);
    }
}

//login
exports.login = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        if (!email) {
            return next(new CustumErrorClass("please add an email", 403));
        }
        if (!password) {
            return next(new CustumErrorClass("please add a password", 403));
        }

        const user = await User.findOne({ email });
        if (!user) {
            return next(new CustumErrorClass("invalid credentials", 400));
        }
        
        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new CustumErrorClass("invalid credentials", 400));
        }

        sendTokenResponse(user, 200, res);

    } catch (error) {
        next(error);
    }
}

const sendTokenResponse = async (user, codeStatus, res) => {
    const token = await user.getJwtToken();
    res
        .status(codeStatus)
        .cookie('token', token, { maxAge: 60 * 60 * 1000, httpOnly: true })
        .json({
            success: true,
            role: user.role
        })
}
