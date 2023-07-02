const mongoose = require("mongoose");
const Film = mongoose.model(
  "Film",
  new mongoose.Schema(
    {
      filmType: Array,
      mainimage: String,
      slideimage:String,
      video: String,
      date: String,
      age: Number,
      time: String,
      languageType: Array,
      price: Number,
      title:String

    },
    {
      timestamps: true,
    }
  )
);
module.exports = { Film };
