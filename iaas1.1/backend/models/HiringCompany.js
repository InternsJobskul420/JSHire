const mongoose = require('mongoose');
const { Schema } = mongoose;

const HCSchema = new Schema({
    compnayName: {
        type: String,
        required: true
    },
    compnayDesc: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('SuperUserDB', HCSchema);