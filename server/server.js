const express=require ('express')
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const CinemaRouter=require("./src/routers/CinemaRouter")
const ContactRouter=require("./src/routers/ContactRouter")
const FilmRouter=require("./src/routers/FilmRouter")
const cookiePrser=require("cookie-parser")
const app=express()
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.send('')
})

app.use('/cinema', CinemaRouter);
app.use('/contact', ContactRouter);
app.use('/film', FilmRouter);
const PORT=5050
mongoose.connect("mongodb+srv://gultekin:gultekinn@cluster0.ez8varc.mongodb.net").then((res)=>{
    console.log("connected")
})

app.listen(PORT,() =>{
    console.log(`app running on ${PORT}`)
})

