const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connectDB = require('../db')
const SuperUser= require('../models/SU'); 
connectDB();
router.post('/loginSU',async(req,res)=>{

    let username = req.body.username;
    let password = req.body.password;
    console.log("reading body data")
    console.log(username);
    console.log(password);

    try {
        console.log("inside try");
        let fetchedSUDetails = await mongoose.connection.db.collection('SuperUserDB').find({}).toArray();
        console.log(fetchedSUDetails[0])
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