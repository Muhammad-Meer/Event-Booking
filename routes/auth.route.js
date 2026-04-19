const express = require('express');
const  registeruser = require('../controller/auth.controller');

const router = express.Router();


// user routes
router.post('/register', registeruser.registeruser);
router.post('/login', registeruser.loginuser);
router.post('/logout', registeruser.logoutuser);



// foodpartner routes
router.post('/food-partner/register', registeruser.foodpartner);
router.post('/food-partner/login', registeruser.loginFoodPartner);
router.post('/food-partner/logout', registeruser.logoutuser);


module.exports = router;