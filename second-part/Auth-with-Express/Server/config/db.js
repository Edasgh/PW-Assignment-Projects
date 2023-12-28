const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//import the mongo_uri from .env file
const mongo_uri = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connected = await mongoose.connect(mongo_uri);
    if (connected) {
      console.log("Connected to mongoDB successfully!");
    }
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = { connectDB };
