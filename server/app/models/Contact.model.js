const mongoose = require("mongoose");
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema(
  {
    image:String,
    mainPhone:String,
    address:String
  },
  {
    timestamps:true,
  }
  )
);
module.exports = { Contact };
