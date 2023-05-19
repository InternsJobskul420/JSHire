const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://internjobskul:Nishitesh44556@jobskul.qmxohvx.mongodb.net/IaaS_Data?retryWrites=true&w=majority';


async function main(){
    mongoose.connect(mongoURL, {useNewUrlParser:true}).then(()=>{
      console.log("connected to db")
      fetchQuestions();
    }).catch((e)=>{
      console.log(e)
    });
  }
  
  const fetchQuestions = async () => {
    try {
      const fetchedQuestions = await mongoose.connection.db.collection('PrototypeQuestions').find({}).toArray();
      const fetchedSUDetails = await mongoose.connection.db.collection('SuperUserDB').find({}).toArray();
      console.log(fetchedQuestions);
  
      global.questions = fetchedQuestions;
      global.SuperUser = fetchedSUDetails;
      console.log(global.questions);
      console.log(global.SuperUser);
    } catch (error) {
      console.error(error);
    }
  };
  
  module.exports = main;