const mongoose = require('mongoose');

// Create User schema
const DoctorSchema = new mongoose.Schema({
    doctorUsername: {
    type: String,
    required: true,
    unique: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  number: {
    type: Number,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
    
  },
  dob: {
    type: String,
    required: true,
    
  },



  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Export the model
const Doctor = mongoose.model('Doctor', DoctorSchema);
module.exports = Doctor;