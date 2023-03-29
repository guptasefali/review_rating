const bcrypt = require("bcrypt")

let User = require("../model/user_schema");



//user Siginup api
const userSiginup = async function (req, res) {
    console.log(req.body);
    const { email, password } = req.body;
    const userData = await User(req.body);
    try {
        const isuserExists = await User.findOne({ email: email });
        if (isuserExists) {
            return res.status(409).json({
                status: false,
                error: "Email already exit",
            });
        }
        const salt = await bcrypt.genSalt(10);
        userData.password = await bcrypt.hash(password, salt);
        await userData.save();
        return res.status(201).json({
            success: true,
            message: "Registation Successfully",
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err.message
        })

    }
}
module.exports = {
    userSiginup
}