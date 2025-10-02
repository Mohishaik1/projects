import mongoose from "mongoose";
import dotenv from 'dotnev';
dotenv.config();

async function dbconnect(){
    try {
      const dbURL = process.env.MONGOURL;
      await mongoose.connect(dbURL)
    } catch (error) {
        console.log(error)
    }
}

dbconnect();