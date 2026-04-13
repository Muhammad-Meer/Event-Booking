const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
// const authroutes = require('./routes/auth.route')


dotenv.config();




const app = express();




app.use(cors());
app.use(express.json());



connectDB();


const port = process.env.PORT || 3200;


app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})