 const  mongoose = require('mongoose');




const connectDB = () => { 

mongoose.connect(process.env.MONGO_URI)

.then(() => console.log('MongoDB connected'))
.catch((Error) => console.log(Error))

}

module.exports = connectDB