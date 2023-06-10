const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connectDB = require('../db')
const Candidate= require('../models/Candidates'); 
connectDB();
router.post('/apply',async(req,res)=>{

    let name = req.body.name;
    let email = req.body.email;
    let collegeName = req.body.collegeName;
    console.log("reading body data")
    console.log(name);
    console.log(email);
    console.log(collegeName);
})

module.exports= router;