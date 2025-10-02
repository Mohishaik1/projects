import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        unique:true
    },
    contact:{
        type:String,
        require:true,
        unique:true
    }
})

const userModel = mongoose.model('enquiry', userSchema, E)