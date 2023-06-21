const FilmModel = require("../models/Film.Movide")

const GetFilm= async (req, res) => {
  const films= await FilmModel.find()
  res.send(films)
}

const GetFilmById = async (req, res) => {
   const { id } = req.params
   const target=await FilmModel.findById(id)
  res.send(target)
}

const PostFilm = async (req, res) => {
 const newFilm=await FilmModel({
   ...req.body
 }) 
 newFilm.save()
 res.send(newFilm)
}

const DeleteFilm = async (req, res) => {
  const {id}=req.params
  const newFilm=await FilmModel.findByIdAndDelete(id)
res.send("delete")
}

const UpdateFilm = async (req, res) => {
   const { id } = req.params
   FilmModel.findByIdAndUpdate(id, req.body, (err, doc) => {
       if (!err) {
           res.status(200).json({ message: "Update" })
       } else {
           res.status(404).json({ message: err })
       }
   })

}

module.exports = {
    GetFilm,
    GetFilmById,
    PostFilm,
    DeleteFilm,
    UpdateFilm
}