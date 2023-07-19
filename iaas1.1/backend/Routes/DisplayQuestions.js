const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const Candidate = require('../models/Candidates');


const candidateDetail = async (id, company) => {
    try {
      let jobRole = null;
      let candidate = null;
      let companyDetails = await Candidate.findOne({ company: company });
      if (companyDetails) {
        
  
        // Find the matching candidate and job role
        companyDetails.openings.forEach((opening) => {
          const foundCandidate = opening.candidates.find((candidate) => candidate._id.toString() === id);
          if (foundCandidate) {
            jobRole = opening.jobRole;
            candidate = foundCandidate;
          }
        });

        // console.log(candidate);
        // console.log(jobRole);
  
        return({
          candidate:candidate,
          jobRole: jobRole
      })
      } else {
        console.log("Company not found");
        return null;
       

      }
    } catch (error) {
      console.error("Error fetching candidate details:", error);
    }
  };

const getQuestions =async(jobRole)=>{

    try {

        let questions = null;

        let fetchQuestions = await mongoose.connection.db.collection('questionsData').find({}).toArray();
        // console.log(fetchQuestions);
        fetchQuestions.forEach((data)=>{
            // console.log(data.CategoryName);
            // console.log(jobRole);
            if(data.CategoryName === jobRole){
                // console.log(data.questions);
                questions = data.questions
            }
        })

        // console.log("questions     ",questions);
        if (questions){
            // console.log(questions);
            return (questions);
            
        }

        else {
            console.log("No such category exist");
        }

        // fetchQuestions.map((category)=>{
        //     console,log(category.CategoryName);
        //     if(category.CategoryName === jobRole){
        //         console.log(category.questions);
        //     }
        // })





        // const Questions = fetchQuestions.find((questionSet)=> {questionSet.CategoryName === jobRole
        // console.log(questionSet.CategoryName)})
        // console.log(Questions);
        // console.log(Questions);
        // return(Questions);
        
    } catch (error) {
        console.log("Error in fetching server");
    }

}
  


router.post('/displayQuestions', async(req,res)=>{
    try {
        // console.log(global.questions)
        // res.send([global.questions])
        // console.log(req.body);
        let data = req.body;
        // console.log(req.body);
       let response = await candidateDetail(data.id, data.company);
       console.log(response.jobRole);
       
        // console.log("calling here 2 times");
       
        let questions = await getQuestions(response.jobRole);
        // let test = questions;
        // console.log(test);
         
        //  console.log(questions);
       
    //    console.log(response);

    if(response && questions){
        res.json({
            candidate: response.candidate,
            jobRole:response.jobRole,
            questions:questions
           })
    }


    else {
        res.json({
            candidate: null,
            jobRole:null,
            questions:null
        })
    }
       



    } catch (error) {
        res.send("Server error");
    }

})



module.exports= router;