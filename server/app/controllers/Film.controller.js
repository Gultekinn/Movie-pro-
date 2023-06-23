const mongoose = require("mongoose");
const { Film } = require("../models/Film.model");
const { storage } = require("../middlewares/multer");
const filmController = {
  getAll: async (req, res) => {
    const films = await Film.find();
    res.send(lists);
  },
  getById: (req, res) => {
    let id = req.params.id;
    Film.findById(id, (err, doc) => {
      if (!err) {
        res.json(doc);
      }
    });
  },
  add: async (req, res, next) => {
    let film = await new Film({
      ...req.body,image: req.files[0].filename,
    });
    film.save();
  },
  edit: async (req, res) => {
    let id = req.params.id;
    const files = req.files;
    const imageArr = [];
    for (let i = 0; i < files.length; i++) {
      imageArr.push(files[i].filename);
    }
    Film.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      function (err, docs) {
        if (err) {
          console.log(err);
        } else {
          console.log(docs);
        }
        res.send("Film Edited");
      }
    );
  },
  delete: (req, res) => {
    let id = req.params.id;
    Film.findByIdAndDelete(id, (err, doc) => {
      if (!err) {
        res.json("Film delete");
      }
    });
  },
};
module.exports = { filmController };
