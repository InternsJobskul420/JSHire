const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connectDB = require('../db')
const Candidate= require('../models/Candidates'); 
connectDB();
router.post('/UploadCv',async(req,res)=>{

    let name = req.body.name;
    let email = req.body.email;
    let collegeName = req.body.collegeName;
    console.log("reading body data")
    console.log(name);
    console.log(email);
    console.log(collegeName);

    try {
        console.log("inside try");
        let fetchedSUDetails = await mongoose.connection.db.collection('Candidates').find({}).toArray();
        // console.log(fetchedSUDetails[0])
        // console.log(fetchedSUDetails[0].username)
        // console.log(fetchedSUDetails[0].password)
        let details = fetchedSUDetails[0]
        if(details.username === username && details.password === password ){
            console.log("matched username")
            res.send({success:true})
        }

        else{
            res.send({
                success:false
            })
        }

        
       

        // if(sudata.username === username && sudata.password === password )
        // return res.send("authentication successful")
    } catch (error) {
        res.send("error in connection");
        console.log(error)
    } 

});

module.exports= router;