const mongoose=require ('mongoose')
const {Contact}=require('../models/Contact.model')
const {storage}=require("../middlewares/multer")
const contactController={
   getAll:(req,res)=>{
    Contact.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            res.status(500).json(err)
        }
    })
   
},
getById:(req,res)=>{
    let id =req.params.id
Contact.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: (req, res, next) => {
    
    let contact=new Film({
        ...req.body,image:req.files[0].filename
    })
    contact.save((err,docs)=>{
        if(!err){
            res.send(`film created ${docs}`)
        }
    })
},
edit:async(req,res)=>{
    let id =req.params.id
    const files=req.files
    const imageArr=[]
    for (let i=0; i<files.length;i++){
        imageArr.push(files[i].filename)
    }
    Contact.findByIdAndUpdate(
        id,
        {
           ...req.body 
        },
        function (err,docs){
            if(err){
                console.log(err)
            } else{
                console.log(docs)
            }
            res.send('contact Edited')
        },
    )
},
delete:(req,res)=>{
    let id =req.params.id
    Contact.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Contact delete')
        }
    })
},
}
module.exports={contactController}
