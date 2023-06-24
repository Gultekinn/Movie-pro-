const mongoose = require("mongoose");
const { Film } = require("../models/Film.model");
// const { storage } = require("../middlewares/multer");
const filmController = {
  getAll: async (req, res) => {
    const films = await Film.find();
    res.send(films);
  },
  getById: (req, res) => {
  const {id} = req.params;
   const target =new Film.findById(id)
   res.send(target)
  },
  add: async (req, res, next) => {
    let film = await new Film({
      filmtype:req.body.filmType.split(",")
    });
    film.save();
  },
  edit: async (req, res) => {
    const {id }= req.params;
   
    Film.findByIdAndUpdate(id,req.body,(err,doc)=>{
      if (!err) {
        res.status(200).json({ message: "Update" })
    } else {
        res.status(404).json({ message: err })
    }
    });
  },
  delete: async(req, res) => {
    const {id} = req.params;
  const newFilm=await  Film.findByIdAndDelete(id);
 
},
};
module.exports = { filmController };
