const express = require('express');
const router = express.Router();
const foodcontroller = require("../controller/food.controller");
const authmiddleware = require("../middleware/auth.middleware");



router.post('/createfood', authmiddleware.authmiddleware, foodcontroller.createfood);

module.exports = router;