require('dotenv').config(); // 🔥 FIRST LINE (important)

const app = require('./src/app');
const connectDB = require('./db/db');

const port = process.env.PORT || 3200;

connectDB();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});