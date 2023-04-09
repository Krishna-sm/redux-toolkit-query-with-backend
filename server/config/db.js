const mongoose = require('mongoose');

const connectDB =async()=>{
   await mongoose.connect(process.env.MONGO_URI);
   console.log(`the db connect with ${mongoose.connection.host}`);

}

module.exports= connectDB;
