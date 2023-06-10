const express = require('express');
const server = express();
const socket = require('socket.io');
const port = process.env.PORT || 80;
const cors = require('cors');

const mongoconnect= require("./db")
mongoconnect();

server.use(express.json());

server.use(cors());

server.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })



server.use('/api', require("./Routes/DisplayQuestions"));
server.use('/api', require("./Routes/CreateHiringCompany"));
server.use('/api', require("./Routes/DisplayHC"));
server.use('/api', require("./Routes/loginSU"));
server.use('/api', require("./Routes/JobOpenings"));
server.use('/api', require("./Routes/Candidates"));



server.get('/', (req,res)=>{
    res.send("Hello world")
})

server.listen(port, ()=>{
  console.log('server started')
})