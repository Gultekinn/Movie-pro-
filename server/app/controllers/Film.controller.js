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
    const mainImageFile = req.files['mainimage'];
    const slideImageFile = req.files['slideimage'];

    if (!mainImageFile || !slideImageFile) {
      return res.status(400).json({ error: 'No image files uploaded' });
    }

    const mainImage = mainImageFile[0].filename;
    const slideImage = slideImageFile[0].filename;


    let newFilm = new Film({
      filmType: req.body.filmType.split(","),
      mainimage: mainImage,
      slideimage: slideImage,
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
    const { filmType, video, date, age, time, languageType, price } = req.body;
    const mainImageFile = req.files['mainimage'];
    const slideImageFile = req.files['slideimage'];

    try {
      const film = await Film.findById(id);

      if (!film) {
        return res.status(404).json({ error: 'Film not found' });
      }

      // Update the film properties
      film.filmType = filmType;
      film.video = video;
      film.date = date;
      film.age = age;
      film.time = time;
      film.languageType = languageType;
      film.price = price;

      // Update the mainImage if uploaded
      if (mainImageFile) {
        film.mainimage = mainImageFile[0].filename;
      }

      // Update the slideImage if uploaded
      if (slideImageFile) {
        film.slideimage = slideImageFile[0].filename;
      }

      // Save the updated film
      await film.save();

      res.status(200).json({ message: 'Film updated successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update film' });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await Film.findByIdAndDelete(id);
    res.send(`${id}'s element has been deleted`);
  },
};
module.exports = { filmController };
