const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const JO = require('../models/JobOpenings');
const connectDB = require('../db');
connectDB();



router.post('/displayjoblist', async(req,res)=>{
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


router.post('/createnewjobopening', async(req,res)=>{
    

        let details = req.body;
        
        // console.log(details);
        // console.log(details.job_details);

        // let array = await JO.find()
        // console.log(array)

        // console.log(details.jobNo)
        let data = await JO.findOne({company: details.company})
        
        
        
        
        // console.log(data)

        // console.log(data)
        if(data === null){
            // console.log("inside the null")
            try {
                
                
                await JO.create({
                    company: details.company,
                    numOfJobs: 1,
                    openings:[details.job_details]
                    
                }).then(()=>{
                    res.json({success:true})
                })
                
            } catch (error) {
                console.log(error)
                // res.send("Server Error", error.message)
                res.json({success: false})
                
            }
          
    
        }


        else {
            // console.log("inside the else")
            // console.log(details.company)
            try {

                let respo = await JO.findOneAndUpdate({company: details.company},{
                    $set:{numOfJobs: details.jobNo},
                    $push:{openings:details.job_details}
                })
                // console.log(details.company)
                // console.log(respo)
                if(respo){
                    res.json({success:true})
                }
               
                
            } catch (error) {
                console.log("error in catch")
                res.json({success:false})
            }
        }

       

        
       
       

        
   
})






module.exports= router;