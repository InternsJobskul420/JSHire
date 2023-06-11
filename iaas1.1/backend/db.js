const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://internjobskul:Nishitesh44556@jobskul.qmxohvx.mongodb.net/IaaS_Data?retryWrites=true&w=majority';
mongoose.set("strictQuery",false)

const connectDB = (url)=>{
  if(url)
  return mongoose.connect(url,{}, console.log("connected to db"))
}


// async function connectDB(){
//     mongoose.connect(mongoURL, {useNewUrlParser:true}).then(()=>{
//       console.log("connected to db")
//       // fetchQuestions();
//     }).catch((e)=>{
//       console.log(e)
//     });
//   }
  
  
  
  module.exports = connectDB;
  