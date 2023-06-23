const mongoose = require('mongoose')
const { User } = require('../models/User.model')
const { storage } = require("../middlewares/multer")

const userController = {
    getAll: (req, res) => {
        User.find({}, (err, docs) => {
            if (!err) {
                res.json(docs)
            } else {
                res.status(500).json(err)
            }
        })

    },
    getById: (req, res) => {
        let id = req.params.id
        User.findById(id, (err, doc) => {
            if (!err) {
                res.json(doc)
            }
        })
    },
    add: (req, res, next) => {

        let user=new User({
            ...req.body,image:req.files[0].filename
        })
        user.save((err,docs)=>{
            if(!err){
                res.send(`user created ${docs}`)
            }
        })
    },
    edit: async (req, res) => {
        let id = req.params.id
        const files = req.files
        const imageArr = []
        for (let i = 0; i < files.length; i++) {
            imageArr.push(files[i].filename)
        }
        User.findByIdAndUpdate(
            id,
            {
                ...req.body
            },
            function (err, docs) {
                if (err) {
                    console.log(err)
                } else {
                    console.log(docs)
                }
                res.send('User Edited')
            },
        )
    },
    delete: (req, res) => {
        let id = req.params.id
        User.findByIdAndDelete(id, (err, doc) => {
            if (!err) {
                res.json('User delete')
            }
        })
    },
}
module.exports = { userController }