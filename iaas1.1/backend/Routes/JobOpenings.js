const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const JO = require('../models/JobOpenings');
const connectDB = require('../db');
connectDB();

router.post('/jobopeninglist', (req,res)=>{
    try {
        JO.find().then((jo)=>{
            res.send(jo);
        })
    } catch (error) {
        res.send("Job Opening error");
    }

})


router.post('/createnewjobopening', async(req,res)=>{
    try {

        let details = req.body;
        await JO.create({
            jobRole: details.jobRole,
            NumOfOpenings: details.NumOfOpenings,
            jobDesc: details.jobDesc,
            jobReq: details.jobReq,
            basicQualif: details.basicQualification
        })

        res.json({success:true})

        
    } catch (error) {
        console.log("cannot create job opening error");
        console.log(error);
        res.json({success:false})
        
    }
})



module.exports= router;