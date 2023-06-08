const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connectDB = require('../db')
const HC= require('../models/HiringCompany'); 
connectDB();
router.post('/loginHC',async(req,res)=>{

    console.log(req.body)
    let email = req.body.email;
    let password = req.body.password;
    console.log("reading body data")
    console.log(email);
    console.log(password);

    try {
        // console.log("inside try");
        // let fetchedHCDetails = await mongoose.connection.db.collection('hiringcompanies').find({}).toArray();
        // // console.log(fetchedSUDetails[0])
        // // console.log(fetchedSUDetails[0].username)
        // // console.log(fetchedSUDetails[0].password)
        // let details = fetchedHCDetails[0]
        // if(details.email === email && details.password === password ){
        //     console.log("matched email")
        //     res.send({success:true})

        let response = await HC.findOne({email: email})
        // console.log(response.email)
        if (response === null){

            return(res.json({
                exist:0
            }) )
                   
        }
        else{
            res.json({
                exist:1
            })   
        }


        }        
       

        // if(sudata.username === username && sudata.password === password )
        // return res.send("authentication successful")
    catch (error) {
        res.send("error in connection");
        console.log(error)
    } 

});

module.exports= router;