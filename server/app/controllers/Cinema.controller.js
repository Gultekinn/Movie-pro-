const mongoose=require ('mongoose')
const {Cinema}=require('../models/Cinema.model')
const {storage} =require("../middlewares/multer")

const cinemaController={
   getAll:(req,res)=>{
    Cinema.find({},(err,docs)=>{
        if(!err){
            res.json(docs)
        }else{
            res.status(500).json(err)
        }
    })
   
},
getById:(req,res)=>{
    let id =req.params.id
Cinema.findById(id,(err,doc)=>{
        if(!err){
            res.json(doc)
        }
    })
},
add: (req, res, next) => {

    let cinema=new Film({
        ...req.body,image:req.files[0].filename
    })
    cinema.save((err,docs)=>{
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
    Cinema.findByIdAndUpdate(
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
            res.send('cinema Edited')
        },
    )
},
delete:(req,res)=>{
    let id =req.params.id
    Cinema.findByIdAndDelete(id,(err,doc)=>{
        if(!err){
            res.json('Cinema delete')
        }
    })
},
}
module.exports={contactController}