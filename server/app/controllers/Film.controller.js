const mongoose = require("mongoose");
const { Film } = require("../models/Film.model");
// const {storage} =require("../middlewares/multer")

const filmController = {
  getAll: async (req, res) => {
    const target = await Film.find();
    res.send(target);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const target = await Film.findById(id);
    res.send(target);
  },
  add: async (req, res) => {
    const mainImageFiles = req.files['mainimage'];

    if (!mainImageFiles || mainImageFiles.length === 0) {
      return res.status(400).json({ error: 'No image files uploaded' });
    }

    const mainImage = mainImageFiles[0].filename;

    let newFilm = new Film({
      filmType: req.body.filmType.split(","),
      mainimage: mainImage,
      video: req.body.video,
      date: req.body.date,
      age: req.body.age,
      time: req.body.time,
      languageType: req.body.languageType.split(","),
      price: req.body.price,
    });
    await newFilm.save();
    res.send(newFilm);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const updateFilm = await Film.findByIdAndUpdate(id, req.body);
    res.send(updateFilm);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await Film.findByIdAndDelete(id);
    res.send(`${id}'s element has been deleted`);
  },
};
module.exports = { filmController };
