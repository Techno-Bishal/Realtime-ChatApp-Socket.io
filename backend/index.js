import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

import UserRoute from './routes/User.route.js'


const app = express()
dotenv.config()
app.use(express.json())

const PORT  = process.env.PORT || 4003
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