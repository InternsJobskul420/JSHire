const express = require('express');
const server = express();
const socket = require('socket.io');
const port = process.env.PORT || 80;

const mongoDB= require("./db")
mongoDB();

server.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })


server.use(express.json())
server.use('/api', require("./Routes/DisplayQuestions"));


server.listen(port, ()=>{
    console.log('server started')
})

server.get('/', (req,res)=>{
    res.send("Hello world")
})