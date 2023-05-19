const express = require('express');
const router = express.Router();

router.post('/displayQuestions', (req,res)=>{
    try {
        console.log(global.questions)
        res.send([global.questions])
    } catch (error) {
        res.send("Server error");
    }

})

module.exports= router;