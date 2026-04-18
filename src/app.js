const express = require('express');
const authroute = require('../routes/auth.route')


const app = express();
app.use(express.json());

app.use(authroute)




module.exports = app;