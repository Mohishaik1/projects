import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';

//db
import registerModel from "../models/Users.js";

const router = express.Router();

router.post('/register', async (req,res)=>{
    try {
        const hash = await bcrypt.hash(req.body.psw, 12);
        req.body.psw = hash;
        console.log(req.body.psw);

        const formData = await registerModel(req.body);
        await formData.save();
        res.status(200).json({success:"user registered"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Internal server error"})
    }
})

router.post('/login', async (req,res)=>{
    try {
        const {email,psw}  = req.body;
        const user = await registerModel.findOne({email});

        if(user){
            console.log(user.psw, user.email);
            var comparehash = await bcrypt.compare(psw, user.psw);
        }

        if (!user) {
            console.error("This email is not associated whith any account");
            return res.json({error:"This email is not associated whith any account"})
        }else if(!comparehash){
                console.error("Incorrect Password");
                return res.json({error:"Incorrect Password"})
        }

        res.status(200).json({status:"User Verified"});
    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
})

export default router;