const mongoose = require("mongoose");
const Contact = mongoose.model(
  "Contact",
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

      mainPhone: String,
    },
    {
      timestamps: true,
    }
  )
);
module.exports = { Contact };
