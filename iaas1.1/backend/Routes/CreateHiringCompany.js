const express = require('express');
const router = express.Router();
const HC = require('../models/HiringCompany')

router.post('/createhiringcompany', async(req,res)=>{
   try {

      let data = req.body;
      console.log(data);

      await HC.create({
         companyName:req.body.companyName,
         description :req.body.description,
         phoneNo : req.body.phoneNo,
         email : req.body.email,
         password : req.body.password
      })

      res.json({
         success:true
      })

    
   } catch (error) {
    res.json({
      success:false
    })
   }
})

module.exports= router;