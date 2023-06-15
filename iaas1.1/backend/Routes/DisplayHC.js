const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const HC = require('../models/HiringCompany')
const connectDB = require('../db')

// connectDB();

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
        // console.log(details)
        // console.log(name);
        res.send(details);

    } catch (error) {
        
    }
})

router.post('/updatecompanydata', async(req,res)=>{
    try {
        let credentials = req.body.updatedCredentials;
        // console.log("inside update")
        // console.log(credentials)
        let name = req.body.updatedCredentials.companyName;
        // console.log(name);
        let details = await HC.findOneAndUpdate({companyName: name},{
            // companyName:req.body.updatedCredentials.companyName,
            description : req.body.updatedCredentials.description,
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


router.post('/createhiringcompany', async (req, res) => {
    try {
 
       let data = req.body;
       // console.log(data);
 
       let response = await HC.findOne({ email: data.email })
       console.log(response)
       // console.log(response.email)
       if (response === null ) {
 
          console.log("inside create");
          await HC.create({
             companyName: req.body.companyName,
             description: req.body.description,
             phoneNo: req.body.phoneNo,
             email: req.body.email,
             password: req.body.password
          })
 
          res.json({
             exist: 1
          })
          
       }
       else {
 
          if(response.email){
             res.json({
                exist: 0
             })
          }
          
 
          
       }
      
 
      
 
 
    } catch (error) {
       res.json({
          exist: -1
       })
    }
 })

module.exports= router;