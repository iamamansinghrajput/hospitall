const User = require('../models/report');
const express = require('express')
const api = express.Router();

api.post('/postreport',apicall);


async function apicall(req,res){
    try {
        const data=req.body;   //get user data from request.body and save it in an object
        const report=new User(data);     //create a new object from the data of the given modal
        await report.save();             // save the new entry in data  base
        res.status(201).json({ message: "User registered successfully" });  // send the response
    } catch (error) {
        console.log(error);
    }


}

module.exports = api;
/*
mongodb quries 
   .save()=save a new entry in data base
   .find({data}) = find all the entry of data in data base
   .findOne({data}) = fine any one entry of data in data base 
*/