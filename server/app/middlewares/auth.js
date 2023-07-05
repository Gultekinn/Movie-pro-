const jwt = require("jsonwebtoken");
const User = require('../models/UserModel')
module.exports.checkUser = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (token) {
            const decodedToken = jwt.verify(token, "secret");
            const user = await User.findById(decodedToken.id);

            if (user) {
                req.user = user;
                next();
            } else {
                res.status(404).json({ status: false });
            }
        } else {
            res.status(401).json({ status: false });
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
};