const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const connectDB = require('../db');
connectDB();
const {google} = require("googleapis")
const KEYFILEPATH = path.join(__dirname, "credentials.json");
const SCOPES = ['https://www.googleapis.com/auth/drive'];
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES
})







router.post('/storeVideos', async(req,res)=>{
    try {
        // console.log(req.body.companyName);
        // console.log(req.body.companyName.length);
        let response = await JO.findOne({company: req.body.companyName})
        // console.log(response)
       
        // console.log(response)
        if(response === null){

            // const newJobId = req.body.companyName + "0"

            res.json({
                data:null,
                jobs: 1
               
            })
        }

        else{

            // let lastElement = response.openings.length
            // let lastJobId = response.openings[lastElement].jobId
            // let newJobId = lastJobId + 1 
            res.json({
                data:response.openings,
                jobs:response.numOfJobs
                
            })
            // console.log(companyName);
            
        }
       
       
        // let company = req.body.companyName
        // let response = await JO.findOne({companyName: company});
        // res.send(response)
        // console.log(response)





    } catch (error) {
        // res.json({success: false});
        res.send(0)
    }

})
