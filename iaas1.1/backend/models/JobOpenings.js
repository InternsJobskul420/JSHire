const mongoose = require('mongoose');
const { Schema } = mongoose;

const JOSchema = new Schema({
    jobRole: {
        type: String,
        required: true
    },
    NumOfOpenings: {
        type: Number,
        required: true
    },
    jobDesc: {
        type: String,
        required: true
    },
    jobReq: {   // Job Requirments
        type: String,
        required: true
    },
    basicQualif: {  // Basic Qualifications
        type: String,
        required: true
    }
})

module.exports = mongoose.model('SuperUserDB', JOSchema);