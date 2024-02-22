const User = require("../Model/userModel")

exports.getUsers = async (req, res, next) => {
    
    const users = await User.find({})
    console.log(users)

    res.status(200).json({
        status: "success",
        message: users
    })
}