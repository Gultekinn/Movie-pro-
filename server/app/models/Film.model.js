const mongoose = require("mongoose");
const Film = mongoose.model(
  "Film",
  new mongoose.Schema({
    video: {
      type: String,
    },
    filmType: {
      type: Array,
    },
    mainimage: {
      type: String,
    },
    slideimage: {
      type: String,
    },
    // mainimage:[
    // {
    //     type:String,
    //     isPoster:{
    //         type:Boolean,
    //         default:false
    //     },
    //     src:String,
    // },
    // ],
    // slideimage:[
    //     {
    //         type:String,
    //         isPoster:{
    //             type:Boolean,
    //             default:false
    //         },
    //         src:String,
    //     },
    //     ],
    date: {
      type: String,
    },
    language: {
      type: String,
    },

    age: {
      type: Number,
    },
    time: {
      type: String,
    },

    price: {
      type: Number,
    },
  }),
  {
    timestamps: true
  }
);
module.exports = { Film };
