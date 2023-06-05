const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://internjobskul:Nishitesh44556@jobskul.qmxohvx.mongodb.net/IaaS_Data?retryWrites=true&w=majority';


async function connectDB(){
    mongoose.connect(mongoURL, {useNewUrlParser:true}).then(()=>{
      console.log("connected to db")
      // fetchQuestions();
    }).catch((e)=>{
      console.log(e)
    });
  }
  
  const fetchQuestions = async () => {
    try {
      // console.log("connected to db");
      // const fetchedQuestions = await mongoose.connection.db.collection('PrototypeQuestions').find({}).toArray();
      // const fetchedSUDetails = await mongoose.connection.db.collection('SuperUserDB').find({}).toArray();
      // const fetchedHiringCompany = await mongoose.connection.db.collection('hiringcompanies').find({}).toArray();
      // console.log(fetchedQuestions);
  
      // global.questions = fetchedQuestions;
      global.SuperUser = fetchedSUDetails;
      // global.HiringCompany = fetchedHiringCompany;
      // console.log(global.questions);
      // console.log(global.HiringCompany);
      // console.log(global.SuperUser);
    } catch (error) {
      console.error(error);
    }
  };
  
  module.exports = connectDB;
  