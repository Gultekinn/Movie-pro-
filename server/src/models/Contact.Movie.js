const mongoose = require("mongoose");
const { Schema } = mongoose;

const ContactSchema = new Schema(
  {
    mainPhone: { required: true, type: Number },
    img: { required: true, type: String },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);