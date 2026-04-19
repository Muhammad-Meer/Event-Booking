const mongoose = require('mongoose');

const foodpartnerSchema = new mongoose.Schema({
  
  fullname: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
    required: true
  }

}, { timestamps: true });

const foodpartnermodel = mongoose.model('foodpartner', foodpartnerSchema);

module.exports = foodpartnermodel;