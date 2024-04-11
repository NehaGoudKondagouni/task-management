const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    projectName:String,
    status:String,

})
const UserModel=mongoose.model('projects',UserSchema)
module.exports =UserModel