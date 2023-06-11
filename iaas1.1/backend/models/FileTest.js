const mongoose = require('mongoose');
const { Schema } = mongoose;

const SUSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('SuperUserDB', SUSchema);
