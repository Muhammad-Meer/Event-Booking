const express = require('express');
const {registeruser, loginuser, } = require('../controller/auth.controller')


const router = express.Router();


router.post('/api/auth/register' , registeruser ),
// router.post('/login' , loginuser ),
// router.post('/register' , verifyotp ),



module.exports = router;