const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const EmployeeModel=require('./models/Employee')

const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/employee1");

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if (user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the passoword is incorrect")
            }
        }else{
            res.json("No record exists")
        }
    })
})

app.post('/register1',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees1=>res.json(employees1))
    .catch(err=>res.json(err))
})

app.listen(3003,()=>{
    console.log("server is running on port 3000")
})