const mongoose = require('mongoose');


const userscheema = new mongoose.Schema({
  name: {
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
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    dafult: 'user',
  },
  isverifyed: {
    type: Boolean,
    dafult: false,
  }
})

const usermodel = mongoose.model('user', userscheema);

module.exports = usermodel