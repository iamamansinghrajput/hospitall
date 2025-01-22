// post api

const User = require('../models/register_doctor');
const express = require('express')
const api = express.Router();




// Register Route
api.post('/doctorregister', async (req, res) => {
  const {doctorUsername,doctorName,email,number,password,dob} = req.body;

  try {
    // Create a new user
    user = new User({
      doctorUsername,
      doctorName,
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