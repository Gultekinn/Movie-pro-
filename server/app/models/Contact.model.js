const mongoose = require("mongoose");
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema(
  {
    image:String,
    mainPhone:String
  },
  {
    timestamps:true,
  }
  )
);
module.exports = { Contact };
