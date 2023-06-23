const mongoose = require("mongoose")

const User = mongoose.model(
    'User',
    new mongoose.Schema(
        {
            username: String,
            email: String,
            password: String,
            isAdmin: false,
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { User }