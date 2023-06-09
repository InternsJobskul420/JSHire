const mongoose = require('mongoose');
const { Schema } = mongoose;

const JOSchema = new Schema({

    company:{
        type: String,
        required: true
    },

    numOfJobs:{
        type: Number,
        required: true
    },


    openings:{
        type: Array,
        required:true
    }

    
})

module.exports = mongoose.model('JobOpenings', JOSchema);