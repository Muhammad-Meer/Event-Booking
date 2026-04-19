const mongoose = require('mongoose');

const foodpartnerSchema = new mongoose.Schema({
   
  name: {
    type: String,
    required: true,
  },

  video: {
    type: String,
    required: true,

  },

  foodpartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "foodpartner",
  }

}, { timestamps: true });



const foodmodel = mongoose.model("food", foodpartnerSchema);


module.exports = foodmodel;

