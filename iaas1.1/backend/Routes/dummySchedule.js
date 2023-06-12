const express = require('express');
const router = express.Router();
const DS = require('../models/dummySchedule');

router.post('/scheduleInterview', async (req, res) => {
  try {
    // Retrieve the interview details from the request body
    console.log(req.body);
    const { interviewTitle, interviewDate, interviewTime } = req.body;

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

module.exports = router;
