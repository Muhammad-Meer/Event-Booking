const foodmodel = require("../models/food.model");
const storageService = require('../services/storage.service');
const { v4: uuid } = require('uuid');

async function createfood(req, res) {
  try {
    console.log(req.foodpartner);
    console.log(req.body);
    console.log(req.file);

    // validation
    if (!req.file) {
      return res.status(400).json({
        message: "Image file is required"
      });
    }

    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // upload file
    const fileuploadResult = await storageService.uploadFile(
      req.file.buffer,
      uuid()
    );

    // save to DB
    const newFood = await foodmodel.create({
      name,
      price,
      image: fileuploadResult.url, // depends on your service
      foodpartner: req.foodpartner._id
    });

    res.status(201).json({
      message: "Food item created successfully",
      food: newFood
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}

module.exports = {
  createfood
};