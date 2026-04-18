const express = require('express');
const  registeruser = require('../controller/auth.controller');

const router = express.Router();

router.post('/api/auth/register', registeruser.registeruser);
router.post('/api/auth/login', registeruser.loginuser);

module.exports = router;