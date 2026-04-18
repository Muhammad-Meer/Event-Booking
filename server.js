const app = require('./src/app');
const connectDB = require('./db/db');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT || 3200;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


