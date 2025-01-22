// post api

const User = require('../models/register_users');
const express = require('express')
const api = express.Router();




// Register Route
api.post('/register', async (req, res) => {
  const {username,name,email,number,password,dob} = req.body;

  try {
    // Create a new user
    user = new User({
      username,
      name,
      email,
      number,
      password,
      dob
    });

    // Save the user to the database
    await user.save();
    console.log(user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});





  module.exports = api;