const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
const filmRoute = require('./app/routes/Film.route')
const cinemaRoute = require('./app/routes/Cinema.route')
const contactRoute=require('./app/routes/Contact.route')
const userRoute = require('./app/routes/AuthRoutes')
app.use('/api/users', userRoute)
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json({ limit: "20mb" }));
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
mongoose.set("strictQuery", true);

const path = require('path')
const uploadPath=path.join(__dirname,'public')
app.use('/public',express.static(uploadPath))

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net").then(()=>{
    console.log("connected")
})

app.use('/films',filmRoute)
app.use('/cinemas',cinemaRoute)
app.use('/contacts',contactRoute)
app.use('/auth', userRoute)

app.listen(8080, () => {
    console.log("server running")
})