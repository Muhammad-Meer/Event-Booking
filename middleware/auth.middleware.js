const foodpartnermodel = require('../models/foodpartner.model');
const jwt = require('jsonwebtoken');


const authmiddleware = (req, res, enxt) => {

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "unauthorized please login first"
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const foodpartner = foodpartnermodel.findById(decoded.id);

    req.foodpartner = foodpartner

    next();

  } catch (error) {
    res.status(401).json({
      message: "invalid token"
    })
  }
}


module.exports = {
  authmiddleware
};