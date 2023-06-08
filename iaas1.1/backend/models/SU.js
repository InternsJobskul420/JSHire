const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const SUSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Hash the password before saving
// SUSchema.pre('save', async function (next) {
//     if (this.isModified('password') || this.isNew) {
//         try {
//             const hashedPassword = await bcrypt.hash(this.password, 10);
//             this.password = hashedPassword;
//             next();
//         } catch (error) {
//             next(error);
//         }
//     } else {
//         return next();
//     }
// });

module.exports = mongoose.model('SuperUserDB', SUSchema);
