import mongoose from "mongoose";

const registerSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
     email:{
        type:String
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
   
    psw:{
        type:String,
        required:true
    }
})

const registerModel = mongoose.model("RegistrationForm", registerSchema,"User-Registration");

export default registerModel;