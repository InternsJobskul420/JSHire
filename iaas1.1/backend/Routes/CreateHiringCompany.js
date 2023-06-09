const express = require('express');
const router = express.Router();
const HC = require('../models/HiringCompany')

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

module.exports = router;