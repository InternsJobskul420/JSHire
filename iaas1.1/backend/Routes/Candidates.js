const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connectDB = require('../db')
const Candidate= require('../models/Candidates');
const HC = require('../models/HiringCompany'); 
const JO = require('../models/JobOpenings');
const upload = require('../middleware/multer')
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



router.post('/fetchcompanydata',async(req,res)=>{

    try {
        data = req.body
        console.log(req.body)
        let details = await HC.findOne({companyName: data.name})
        let joDes = await JO.findOne({company: data.name, 'openings.jobId': data.jobId },{ 'openings.$': 1 })
        // console.log(joDes)
        // console.log(joDes.openings[0])
        let jobdetails = joDes.openings[0]
        console.log(jobdetails)
        console.log(jobdetails.jobDesc)
        console.log(jobdetails.basicQualif)
        
        if(details && joDes){
            res.json({
                CD: details.description,
                JobRole: jobdetails.jobRole,
                JD:jobdetails.jobDesc,
                JR:jobdetails.jobReq,
                BQ:jobdetails.basicQualif,
            })
        }

        else{
            res.send({
                description: null
            })
        }
       
    } catch (error) {
        console.log(error);
    }
   
   

})

module.exports= router;