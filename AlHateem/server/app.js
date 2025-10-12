import express, { application } from "express";
import cors from 'cors';
// import bcrypt from 'bcrypt';

//db
import './utils/dbConnect.js';

//Controllers
import userRouter from './controllers/UsersControllers.js';



const PORT = 5500;
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);


app.get('/', (req,res)=>{
    try {
        res.send(`Express running at port ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})




app.listen(PORT,()=>{
    console.log(`Server is up and running at port ${5500}`)
})