//import express and define router
const express = require("express");
const userRoutes = express.Router();

//the request handling functions
const { registerUser, loginUser } = require("../controllers/userControllers");

//api endpoints with request handler functions
userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

//export the router
module.exports = userRoutes;
