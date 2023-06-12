const express = require('express');
const server = express();
const socket = require('socket.io');
const port = process.env.PORT || 80;
const cors = require('cors');
const connectDB = require('./db');
const dotenv = require('dotenv');
dotenv.config();

server.use(express.json());
server.use(cors());

// server.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   })




server.use('/api', require("./Routes/DisplayQuestions"));
server.use('/api', require("./Routes/CreateHiringCompany"));
server.use('/api', require("./Routes/DisplayHC"));
server.use('/api', require("./Routes/loginSU"));
server.use('/api', require("./Routes/JobOpenings"));
server.use('/api', require("./Routes/Candidates"));
server.use('/api', require("./Routes/dummySchedule"));
// server.use('/api', require("./Routes/FileUpload"));



server.get('/', (req,res)=>{
    res.send("Hello world")
})

const start=async()=>{
  try {

    // console.log(process.env.mongoURI)
    await connectDB(process.env.mongoURI);
    
    server.listen(port, ()=>{
    console.log('server started')
})
  } catch (error) {
    console.log(error)
  }
}



start();

