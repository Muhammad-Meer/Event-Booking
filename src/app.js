const express = require('express');
const cookieparser = require('cookie-parser');


const authroute = require('../routes/auth.route')
const foodroute = require('../routes/food.routes')


const app = express();
app.use(express.urlencoded({ extended: true }));



app.use(express.json());
app.use(cookieparser());
app.use('/api/auth', authroute);
app.use('/', foodroute);

app.get("/", (req, res) => {
  res.send("OK WORKING");
});



module.exports = app;

