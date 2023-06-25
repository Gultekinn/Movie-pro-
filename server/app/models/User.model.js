const mongoose = require("mongoose")

const User = mongoose.model(
    'User',
    new mongoose.Schema(
        {
            username: String,
            email: String,
            password: String,
            isAdmin: Boolean,
        },
        {
            timestamps: true,
        },
    ),
)

module.exports = { User }