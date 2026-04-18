const app = require('./src/app');
const connectDB = require('./db/db');
const dotenv = require('dotenv');


dotenv.config();

connectDB();


const port = process.env.PORT || 3200;


app.listen(port, () => {
  console.log(`server is runung in this port http://localhost:${port}`);
})