const mongoose = require("mongoose");
const Cinema = mongoose.model(
  "Cinema",
  new mongoose.Schema(
    {
      image: String,
      title: String
    },
    {
      timestamps: true,
    }
  )
);
module.exports = { Cinema };