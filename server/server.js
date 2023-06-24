const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config();
const mongoose = require("mongoose")
// const connect = require('./app/configs/database.connect')
const filmRoute = require('./app/routes/Film.route')
const cinemaRoute = require('./app/routes/Cinema.route')
const contactRoute=require('./app/routes/Contact.route')
app.use(cors())


app.use('/films',filmRoute)
app.use('/cinemas',cinemaRoute)
app.use('/contacts',contactRoute)
app.listen(8080, () => {
    console.log("server running")
})