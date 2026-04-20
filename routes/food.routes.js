const express = require('express');
const multer = require('multer');


const router = express.Router();
const foodcontroller = require("../controller/food.controller");
const authmiddleware = require("../middleware/auth.middleware");


const upload = multer({
  storage: multer.memoryStorage(),
})



router.post('/createfood', authmiddleware.authmiddleware,
  upload.single("video"),
   foodcontroller.createfood);

module.exports = router;