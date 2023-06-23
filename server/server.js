const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const filmRoute = require('./app/routes/Film.route')
app.use(cors())

//Db Connection
mongoose.connect("mongodb+srv://gultekin:<password>@cluster0.ez8varc.mongodb.net/").then(() => {
    console.log("db connected");
})

app.use('/film',filmRoute)

app.listen(8080, () => {
    console.log("server running")
})