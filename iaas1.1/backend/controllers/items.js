const files = require('../models/FileTest');
const path = require("path");
const asyncWrapper = require('../middleware/asyncWrapper');


const getItems = async(req,res)=>{
    try {
        const items = await files.find();
        res.status(200).json({items});
    } catch (error) {
        console.log(error);
    }
}

const addItem = asyncWrapper(async(req,res)=>{
    const {name} = req.body;
    const file = req.file.path;
    const item = await files.create({name , file});
    res.status(201).json({item});
});

module.exports={
    getItems,
    addItem
}