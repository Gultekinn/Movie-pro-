const mongoose = require("mongoose")
//Db Connection
const connect = mongoose.connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net/",
{useNewUrlParser: true}
)

module.exports=connect