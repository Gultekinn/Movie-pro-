const mongoose = require("mongoose");
const Cinema = mongoose.model(
  "Cinema",
  new mongoose.Schema(
    {
      image: [
        {
          type: String,
          isPoster: {
            type: Boolean,
            default: false,
          },
          src: String,
        },
      ],

      title: String,
    },
    {
      timestamps: true,
    }
  )
);
module.exports = { Cinema };