const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require('./models/Users')

const app=express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/server5")
app.get('/status',(req,res)=>{
    UserModel.find()
    .then(projects=>res.json(projects))
    .catch(err=> res.json(err))
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})