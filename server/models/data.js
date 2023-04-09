const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is Required"]
    },
    email:{
        type:String,
        required:true,
        
    },
    desc:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const model = mongoose.model('curd',Schema);
module.exports=model;