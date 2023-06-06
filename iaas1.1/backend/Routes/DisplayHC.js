const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const HC = require('../models/HiringCompany')
const connectDB = require('../db')

connectDB();

router.post('/displayhiringcompanies', (req,res)=>{
    try {
        // console.log("inside api")
        HC.find().then((hcs)=>{
            res.send(hcs);
        })
        // console.log(global.HiringCompany)
        // res.send(global.HiringCompany)
    } catch (error) {
        res.send("Server error");
    }

})


router.post('/companydetails', async(req,res)=>{
    try {
        let name = req.body.companyName;
        let details = await HC.findOne({companyName: name})
        console.log("fetching details of the company")
        console.log(details)
        console.log(name);
        res.send(details);

    } catch (error) {
        
    }
})

router.post('/updatecompanydata', async(req,res)=>{
    try {
        let credentials = req.body.updatedCredentials;
        // console.log(credentials)
        let name = req.body.updatedCredentials.companyName;
        let details = await HC.findOneAndUpdate({companyName: name},{
            description : req.body.updatedCredentials.companyName,
            email : req.body.updatedCredentials.email
        })
        // console.log(details)
        // console.log(credentials)
        // console.log(name);
        res.json({
            success : true
        });


    } catch (error) {
        res.json({
            success:false
        })
    }
})

module.exports= router;