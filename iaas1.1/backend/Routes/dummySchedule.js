const express = require('express');
const router = express.Router();
const DS = require('../models/dummySchedule');
const Candidate = require('../models/Candidates')

router.post('/scheduleInterview', async (req, res) => {
  try {
    // Retrieve the interview details from the request body
    // console.log(req.body.data);
    
    const data = req.body.data;
    const companyName = data.company;
    const applicationLink = data.applicationLink;
    const candidateId = data.id;
    const date = data.interviewDate;
    const address = "http://localhost:3000/candidatewelcome"
    const inputDate = new Date(date);
    const inputTime = data.interviewTime; 
    const [hours, minutes] = inputTime.split(':');
    inputDate.setHours(hours,minutes,0,0);
    const millis = inputDate.getTime();
    // console.log(millis)
    const interviewLink = `${address}/${companyName}/${candidateId}?expires=${millis}`

    // console.log(interviewLink)
    // console.log(applicationLink)


    const company = await Candidate.findOne({ company: companyName });
    

    if (company) {
      const openingIndex = company.openings.findIndex((opening) => opening.link === applicationLink);
      console.log(openingIndex)

      if (openingIndex !== -1) {

        // const candidateIndex = -1;
        const candidateObj = company.openings[openingIndex].candidates.find((c) => c._id.toString() === candidateId);
        console.log(candidateObj)
        if (candidateObj) {
          console.log(candidateObj.interviewLink)
          if (candidateObj.interviewLink === null ) {
            console.log("inside if crete link")
            // Interview link exists, update it
            candidateObj.interviewLink = interviewLink;
          } else {
            // Interview link does not exist, push it
            candidateObj.interviewLink = interviewLink;
            console.log("inside else create link")

            // candidateObj.interviewLink = [interviewLink];
          }

          await company.save();

          res.json({ success: true, candidateLink: candidateObj.interviewLink });
        } else {
          res.json({ success: false, message: 'Candidate not found' });
        }
      } else {
        res.json({ success: false, message: 'Opening not found' });
      }
    } else {
      res.json({ success: false, message: 'Company not found' });
    }
    

    // Create a new instance of the DS model with the interview details
    // const newInterview = new DS({
    //   interviewTitle,
    //   interviewDate,
    //   interviewTime,
    // });

    // // Save the new interview to the database
    // await newInterview.save();

    // // Log a success message
    // console.log('Interview details saved:', newInterview);

    // // Send a success response
    // res.status(200).json({ success: true, message: 'Interview scheduled successfully' });
  } catch (error) {
    // Handle any errors that occurred
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while scheduling the interview' });
  }
});


// ...

router.post('/addInterviewLink', async (req, res) => {
  const { companyName, link, candidateId, interviewLink } = req.body;

  try {
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ...


module.exports = router;
