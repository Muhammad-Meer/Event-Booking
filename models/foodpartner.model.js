const mongoose = require('mongoose');



const foodpartnerSchema = new mongoose.Schema({

   fullname: {
      type: String,
      required: true,
    },

  
    email: {
      type: String,
      required: true,
      unique: true,
    },

  
    password: {
      type: String,
      required: true,
      unique: true,
    }
  },
    { timestamps: true })
  
  const foodpartnermodel = mongoose.model('foodpartner', userscheema);
  
  module.exports = foodpartnermodel
