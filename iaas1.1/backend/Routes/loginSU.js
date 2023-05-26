const express = require('express');
const router = express.Router();
const SuperUser= require('../models/SU'); 

router.post('/loginSU',[body('username'), body('password')] ,async(req,res)=>{

    let username = req.body.username;
    let password = req.body.password;
    console.log(username);

    try {
        let sudata = await SuperUser.findOne({username});
        if(sudata.username === username);
        console.log("username matched");
        if(sudata.password === password);
        console.log("password matched");

        if(sudata.username === username && sudata.password === password )
        return res.send("authentication successful")
    } catch (error) {
        res.send("credentials not found");
    } 

})

module.exports= router;