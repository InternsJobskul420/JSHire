const express = require('express');
const server = express();
const port = 4000;

const mongoDB= require("./db")
mongoDB();

server.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
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