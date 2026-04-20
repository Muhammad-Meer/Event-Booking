const foodmodel = require("../models/food.model");

async function createfood(req, res) {
console.log(req.foodpartner)
console.log(req.body)
res.send("food item created successfully")
}


module.exports = {
  createfood
}