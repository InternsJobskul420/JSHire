const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const HC = require('../models/HiringCompany')
const connectDB = require('../db')

connectDB();

router.post('/displayhiringcompanies', (req,res)=>{
    try {
        console.log("inside api")
        HC.find().then((hcs)=>{
            res.send(hcs);
        })
        // console.log(global.HiringCompany)
        // res.send(global.HiringCompany)
    } catch (error) {
        res.send("Server error");
    }

})

module.exports= router;