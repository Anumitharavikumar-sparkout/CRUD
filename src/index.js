const express=require('express')
const mongoose=require('mongoose')
const cors = require('cors')
require('dotenv').config()
const router=require('./router')
const app=express()
app.use(express.json())
app.use(router)
app.use(cors())
mongoose.connect(process.env.MONGO)
.then((e)=>console.log("connected"))
.catch((e)=>{
  console.log("error in connection")
})

app.listen(process.env.PORT,()=>{
  console.log(`server started at port ${process.env.PORT}`)
})












