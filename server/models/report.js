const mongoose = require('mongoose');

// Create User schema
const ReportSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
    
  },
  number: {
    type: Number,
    required: true,
    
  },
  weight: {
    type: String,
    required: true,
    
  },
  bloodGroup: {
    type: String,
    required: true,
    
  },
  sugerLevel: {
    type: String,
    required: true,
    
  },
  doctorName: {
    type: String,
    required: true,
    
  },
  doctorUsername: {
    type: String,
    required: true,
    
  },
   hospitalName: {
    type: String,
    required: true,
    
  },




  createdAt: {
    type: Date,
    default: Date.now,
  }
});

// Export the model
const Report = mongoose.model('Report', ReportSchema);
module.exports = Report;