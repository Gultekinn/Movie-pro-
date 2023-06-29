const mongoose=require ('mongoose')
const {Contact}=require('../models/Contact.model')
// const {storage} =require("../middlewares/multer")

const contactController={
   getAll: async (req,res)=>{
    const target = await Contact.find()
    res.send(target)
},
getById: async(req,res)=>{
    const {id} = req.params
    const target = await Contact.findById(id)
    res.send(target)
},
add: async(req, res, next) => {
    const {filename} = req.body
    let newContact = new Contact({
        image: req.file.filename,
        mainPhone: req.body.mainPhone,
        address:req.body.address
    })
    await newContact.save()
    res.send(newContact)
},
edit:async(req,res)=>{
    const {id} = req.params
    const updateContact = await Contact.findByIdAndUpdate(id , req.body)
    res.send(updateContact)
},
delete: async (req,res)=>{
    const {id} = req.params
    await Contact.findByIdAndDelete(id)
    res.send(`${id}'s element has been deleted`)
}
}
module.exports={contactController}