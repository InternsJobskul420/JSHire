const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connectDB = require('../db')
const Candidate = require('../models/Candidates');
const HC = require('../models/HiringCompany');
const JO = require('../models/JobOpenings');
connectDB();
router.post('/apply', async (req, res) => {

    let details = req.body.details;
    let jobID = req.body.jobId;
    let company = req.body.companyName;
    // let email = req.body.email;
    // let collegeName = req.body.collegeName;
    // let companyName = req.body.companyName;
    // let jobId = req.body.jobId;
    // console.log("reading body data")
    console.log(details);
    console.log(jobID);
    console.log(company);
    // console.log(email);
    // console.log(collegeName);
    // console.log(companyName);
    // console.log(jobId);

    router.post('/fetchdetails', async (req, res) => {
        try {
            const companyDetails = await HC.findOne({ companyName: company });

            if (companyDetails) {
                const { description } = companyDetails;

                const jobDetails = await JO.findOne({ 'openings.jobId': jobID });

                if (jobDetails) {
                    const { jobReq, basicQualif, jobRole } = jobDetails.openings.find((opening) => opening.jobId === jobID);

                    res.json({ description, jobReq, basicQualif, jobRole });
                } else {
                    res.status(404).json({ error: 'Job not found' });
                }
            } else {
                res.status(404).json({ error: 'Company not found' });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server error' });
        }
    });

});

module.exports = router;