const CinemaModel = require("../models/Cinema.Movie");

const GetCinema = async (req, res) => {
  const cinemas = await CinemaModel.find();
  res.send(cinemas);
};

const GetCinemaById = async (req, res) => {
  const { id } = req.params;
  const target = await CinemaModel.findById();
  res.send(target);
};

const PostCinema = async (req, res) => {
  const newPost = await CinemaModel({
    ...req.body,
  });
  newPost.save();
  res.send(newPost);
};

const DeleteCinema = async (req, res) => {
  const { id } = req.params;
  const newCinema = await CinemaModel.findByIdAndDelete(id);
  res.send("delete");
};

const UpdateCinema = async (req, res) => {
  const { id } = req.params;
  Cinema.findByIdAndUpdate(id, req.body, (err, doc) => {
    if (!err) {
      res.status(200).json({ message: "Update" });
    } else {
      res.status(404).json({ message: err });
    }
  });
};

module.exports = {
  GetCinema,
  GetCinemaById,
  PostCinema,
  DeleteCinema,
  UpdateCinema,
};
