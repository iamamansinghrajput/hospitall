const mongoose = require('mongoose');

// Create User schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
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
const User = mongoose.model('User', UserSchema);
module.exports = User;