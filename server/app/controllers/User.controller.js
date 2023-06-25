const mongoose = require('mongoose')
const { User } = require('../models/User.model')
// const { storage } = require("../middlewares/multer")

const userController = {
    getAll: async (req, res) => {
        const target = await User.find()
        res.send(target)

    },
    getById: async (req, res) => {
        const { id } = req.params
        const target = await User.findById(id)
        res.send(target)
    },

    // add: async (req, res, next) => {
    //     const { filename } = req.body
    //     let newUsers = new User({
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: req.body.password,
    //         isAdmin: req.body.isAdmin,
    //     })
    //     await newUsers.save()
    //     res.send(newUsers)
    // },

    // edit: async (req, res) => {
    //     const { id } = req.params
    //     const updateUser = await User.findByIdAndUpdate(id, req.body);
    //     res.send(`${id}'li element has been updated`, updateUser)
    // },
    
    delete: async(req, res) => {
        const { id } = req.params
        await User.findByIdAndDelete(id)
        res.send(`${id}'s user has been deleted`)
    },
}
module.exports = { userController }