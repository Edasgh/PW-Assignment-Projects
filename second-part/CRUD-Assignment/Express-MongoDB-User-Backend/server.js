//import express
const express = require("express");
//create an express application
const app = express();
//import dotenv
const dotenv = require("dotenv");
dotenv.config();

//import the "connectDB" function to connect the server to mongoDB
const { connectDB } = require("./config/db");

//import the router
// api endpoints for the "User" auth management
const userRoutes = require("./routes/userRoutes");

//setting a port for our server to listen to
const port = process.env.PORT;

app.use(express.json()); // to accept json data

//use the api endpoints and the request callbacks
app.use(userRoutes);

//starting the server
app.listen(port, async () => {
  //call the connectDb function to connect to the server
  await connectDB();
  console.log(`Server listening at http://localhost:${port}`);
});
