const express = require('express');
const  registeruser = require('../controller/auth.controller');

const router = express.Router();

router.post('/register', registeruser.registeruser);
router.post('/login', registeruser.loginuser);
router.post('/logout', registeruser.logoutuser);

module.exports = router;