const mongoose = require("mongoose")
const {Schema} = mongoose

const CinemaActionSchema = new Schema(
    {
        img:{required:true,type:String},
        title:{required:true,type:String},
       
    },
    {timestamps:true}
)

module.exports = mongoose.model("Cinema",CinemaActionSchema)