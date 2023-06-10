const mongoose = require('mongoose');
const { Schema } = mongoose;

const CandSchema = new Schema({
    company:{
        type: String,
        required: true
    },
    // collegeName: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // CV: {
    //     data: Buffer,
    //     contentType: String,
    //     required: true
    // },
    // pfp: { // profile picture
    //     data: Buffer,
    //     contentType: String,
    //     required: true
    // }
    openings:[{
        jobID:{
            type: String,
            required: true
        },
        
        link:{
            type: String,
            required: true
        },
        candidates:{
            type: Array,
            required:true
        }
    }]
})

module.exports = mongoose.model('Candidates', CandSchema);