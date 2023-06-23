const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Candidate= require('../models/Candidates');
const HC = require('../models/HiringCompany'); 
const JO = require('../models/JobOpenings');
const multer = require('multer');
const uploadMiddleware = require('../middleware/multer');
// const upload = require('../middleware/multer');
const uploads = multer({dest:'uploads/'})
const path = require('path')




// router.post('/UploadCv',async(req,res)=>{

//     let name = req.body.name;
//     let email = req.body.email;
//     let collegeName = req.body.collegeName;
//     console.log("reading body data")
//     console.log(name);
//     console.log(email);
//     console.log(collegeName);

//     try {
//         console.log("inside try");
//         let fetchedSUDetails = await mongoose.connection.db.collection('Candidates').find({}).toArray();
//         // console.log(fetchedSUDetails[0])
//         // console.log(fetchedSUDetails[0].username)
//         // console.log(fetchedSUDetails[0].password)
//         let details = fetchedSUDetails[0]
//         if(details.username === username && details.password === password ){
//             console.log("matched username")
//             res.send({success:true})
//         }

//         else{
//             res.send({
//                 success:false
//             })
//         }

        
       

//         // if(sudata.username === username && sudata.password === password )
//         // return res.send("authentication successful")
//     } catch (error) {
//         res.send("error in connection");
//         console.log(error)
//     } 

// });



router.post('/fetchcompanydata',async(req,res)=>{

    try {
        data = req.body
        // console.log(req.body)
        let details = await HC.findOne({companyName: data.name})
        let joDes = await JO.findOne({company: data.name, 'openings.jobId': data.jobId },{ 'openings.$': 1 })
        // console.log(joDes)
        // console.log(joDes.openings[0])
        let jobdetails = joDes.openings[0]
        // console.log(jobdetails)
        // console.log(jobdetails.jobDesc)
        // console.log(jobdetails.basicQualif)
        
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



router.post('/candidateupload',uploadMiddleware.fields([{name:'cv'},{name:'profilePic'}]),async(req,res)=>{
    const files = req.files;
    const cvFile = req.files['cv'][0];
    const profilePic = req.files['profilePic'][0];
    // const profile = req.files['profile'][0];
    const data = req.body
    // console.log(files)
    // console.log(req.files)
    // console.log(req.files['cv'])
    // console.log(req.files['profile'][0])
    // console.log(cvFile)
    // console.log(profile)
    console.log(data)
    console.log(data.company)

    let companyId = await Candidate.findOne({company: data.company})
    if(companyId === null){

       await Candidate.create({
        company : data.company,
        openings: [
            {
                jobRole: data.jobRole,
                link: data.link,
                candidates: [{
                    name: data.name,
                    email: data.email,
                    collegeName: data.collegeName,
                    cv: req.files['cv'][0].path,
                    profilePic: req.files['profilePic'][0].path,
                    interviewLink:null
                }]
            }
        ]
       })

       res.json({
        success:true
      })


    }
    
    else {
      // If the company already exists, check if the link exists in the openings
      let openingIndex = -1;
      companyId.openings.forEach((opening, index) => {
        if (opening.link === data.link) {
          openingIndex = index;
          return;
        }
      });

      if (openingIndex !== -1) {
        // If the link exists, push the candidate details to the existing link
        companyId.openings[openingIndex].candidates.push({
          name: data.name,
          email: data.email,
          collegeName: data.collegeName,
          cv: cvFile.path,
          profilePic: profilePic.path,
          interviewLink:null,
        });

        res.json({
          success:true
        })

      } else {
        // If the link doesn't exist, create a new link in the openings and add the candidate details
        companyId.openings.push({
          jobRole: data.jobRole,
          link: data.link,
          candidates: [
            {
              name: data.name,
              email: data.email,
              collegeName: data.collegeName,
              cv: cvFile.path,
              profilePic: req.files['profilePic'][0].path,
              interviewLink:null,
            },
          ],
        });

        res.json({
          success:true
        })
      }

      await companyId.save(); // Save the updated company document
    }


})


router.post('/appliedcandidates', async (req, res) => {
  const { link } = req.body;
  // console.log(link)

  try {
    const company = await Candidate.findOne({ 'openings.link': link });

    if (company) {
      const opening = company.openings.find((opening) => opening.link === link);
      
      if (opening) {
        const candidates = opening.candidates;
        res.json({ candidates });
      } else {
        res.json({ candidates: [] });
      }
    } else {
      res.json({ candidates: [] });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});






module.exports= router;