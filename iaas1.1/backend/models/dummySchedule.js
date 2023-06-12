const mongoose = require('mongoose');
const { Schema } = mongoose;

const dsSchema = new Schema({
    interviewTitle: {
        type: String,
        required: true
    },
    userDate: {
        type: Date,
        required: true
    },
    userTime: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('scheduleInterview', dsSchema);
