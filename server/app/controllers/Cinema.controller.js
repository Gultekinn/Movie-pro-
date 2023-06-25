const mongoose=require ('mongoose')
const {Cinema}=require('../models/Cinema.model')
// const {storage} =require("../middlewares/multer")

const cinemaController={
   getAll: async (req,res)=>{
    const target = await Cinema.find()
    res.send(target)
},
getById: async(req,res)=>{
    const {id} = req.params
    const target = await Cinema.findById(id)
    res.send(target)
},
add: async(req, res, next) => {
    const {filename} = req.body
    let newCinema = new Cinema({
        image: req.file.filename,
        title: req.body.title
    })
    await newCinema.save()
    res.send(newCinema)
},
edit:async(req,res)=>{
    const {id} = req.params
    const updateCinema = await Cinema.findByIdAndUpdate(id , req.body)
    res.send(`${id}'s element has been updated` , updateCinema)
},
delete: async (req,res)=>{
    const {id} = req.params
    await Cinema.findByIdAndDelete(id)
    res.send(`${id}'s element has been deleted`)
}
}
module.exports={cinemaController}