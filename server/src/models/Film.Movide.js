const mongoose = require("mongoose");
const { Schema } = mongoose;

const FilmSchema = new Schema(
  {
    mainimg: { required: true, type: String },
    slideimg: { required: true, type: String },
    video: { required: true, type: String },
    type: { required: true, type: String },
    date: { required: true, type: String },
    languge: { required: true, type: String },
    age: { required: true, type: Number },
    time: { required: true, type: String },
    price: { required: true, type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Film", FilmSchema);
