//import mongoose, dotenv and the required mongo_uri
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//call the config function to use variables from the .env file here
dotenv.config();

//import the mongo_uri from .env file
const mongo_uri = process.env.MONGO_URI;

//function to connect the server to the mongoDB database
const connectDB = async (req, res) => {
  try {
    const conn = await mongoose.connect(mongo_uri);
    if (conn) {
      //if the coneection establishes successfully, log a success message to the console
      console.log("Connected to DB successfully!");
    }
  } catch (error) {
    //if the connection fails somehow,log the error to the console
    console.log(error);
    process.exit();
  }
};

//export the function
module.exports = { connectDB };
