import express from 'express';
import dotenv from 'dotenv';
import './utils/dbConnect.js';
dotenv.config();

const PORT = process.env.PORT;

const app = express();


app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})