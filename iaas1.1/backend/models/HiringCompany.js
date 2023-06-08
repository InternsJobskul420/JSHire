const mongoose = require('mongoose');
const { Schema } = mongoose;

const HCSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        uniqueItems:true
    },
    phoneNo: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('hiringcompanies', HCSchema);