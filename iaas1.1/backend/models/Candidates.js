const mongoose = require('mongoose');
const { Schema } = mongoose;

// const CandSchema = new Schema({
//     company:{
//         type: String,
//         required: true
//     },
//     // collegeName: {
//     //     type: String,
//     //     required: true
//     // },
//     // email: {
//     //     type: String,
//     //     required: true
//     // },
//     // CV: {
//     //     data: Buffer,
//     //     contentType: String,
//     //     required: true
//     // },
//     // pfp: { // profile picture
//     //     data: Buffer,
//     //     contentType: String,
//     //     required: true
//     // }
//     openings:[{
//         jobRole:{
//             type: String,
//             required: true
//         },
        
//         link:{
//             type: String,
//             required: true
//         },
//         candidates:{
//             type: Array,
//             required:true
//         }
//     }]
// })


const CandidateSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    collegeName: {
      type: String,
      required: true
    },
    cv: {
      type: String,
      required: true
    },
    profilePic: {
      type: String,
      required: true
    },
    interviewLink: {
      type: String
    }
  });


  const OpeningSchema = new Schema({
    jobRole: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    candidates: [CandidateSchema] // Array of candidates
  });

  const CandSchema = new Schema({
    company: {
      type: String,
      required: true
    },
    openings: [OpeningSchema] // Array of openings
  });


module.exports = mongoose.model('Candidates', CandSchema);