const express = require('express');
const authroute = require('../routes/auth.route')
const cookieparser = require('cookie-parser');


const app = express();


app.use(express.json());
app.use(cookieparser());
app.use('/api/auth', authroute);




module.exports = app;