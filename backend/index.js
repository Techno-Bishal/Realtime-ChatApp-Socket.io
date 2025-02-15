import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import UserRoute from './routes/User.route.js'



const app = express()
dotenv.config()
//middlewares for postman
app.use(express.json())
app.use(cookieParser())
//for cors error
app.use(cors())

const PORT  = process.env.PORT || 4001
const MONGO_URI = process.env.MONGO_URI

try{
    mongoose.connect(MONGO_URI)
    console.log("Connected to mongoDb Database")
}catch(error){
    console.log(error)
}

app.use("/user", UserRoute)

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`)
})