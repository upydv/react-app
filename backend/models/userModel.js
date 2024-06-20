const { Timestamp } = require('mongodb')
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },email:{
        type:String,
        required:true,
        unique:true
    }
},{Timestamp:true})

const user=mongoose.model('user',userSchema)
module.exports=user