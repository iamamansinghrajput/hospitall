// post api

const User = require('../models/report');
const express = require('express')
const api = express.Router();




// get loged in user data Route
api.post('/myreport', async (req, res) => {
  const {username} = req.body;

  try {
    // Create a new user
    const user =await User.find({username});

    // Save the user to the database
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});


  module.exports = api;