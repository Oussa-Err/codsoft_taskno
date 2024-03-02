const User = require("../Model/userModel");
const CustomErr = require("../Utils/CustumErrorClass");
const jwt = require('jsonwebtoken');

exports.signup = async (req, res, next) => {
    const { email } = req.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
        return next(new CustomErr("E-mail already registred", 400));
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

exports.login = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        if (!email) {
            return next(new CustomErr("please add an email", 403));
        }
        if (!password) {
            return next(new CustomErr("please add a password", 403));
        }

        const user = await User.findOne({ email });
        if (!user) {
            return next(new CustomErr("invalid credentials", 400));
        }

        const isMatched = await user.comparePassword(password);
        if (!isMatched) {
            return next(new CustomErr("invalid credentials", 400));
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
        .cookie('token', token, {
            maxAge: 60 * 60 * 1000, httpOnly: true,
            sameSite: 'None',
            secure: true,
        })
        .json({
            success: true,
            role: user.role
        })
}

exports.logout = (req, res, next) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "logged out"
    })
}

exports.personalInfo = async (req, res, next) => {
    const user = await User.findById(req.user.id).select('-password');
    res.status(200).json({
        success: true,
        user
    })
}

exports.isloggedIn = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return next(new CustomErr('You must log in!', 401));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        console.log(error)
        return next(new CustomErr('You must log in!', 401));
    }
}


exports.isAdmin = (req, res, next) => {
    if (req.user.role === 0) {
        return next(new CustomErr('Access denied, you must be an admin', 401));
    }
    next();
}