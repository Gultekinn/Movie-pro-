const jwt = require("jsonwebtoken");
const User = require('../models/UserModel')
module.exports.checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, "secret", async (err, decodedToken) => {
            if (err) {
                res.json({ err });
                next();
                console.log("error:", err);
            } else {
                const user = await User.findById(decodedToken.id);

                if (user) {
                    res.json({ status: true, data: user });
                } else {
                    res.json({ status: false });
                    next();
                }
            }
        });
    } else {
        res.json({ status: false });
        next();
    }
};