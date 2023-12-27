//import express and define router
const express = require("express");
const router = express.Router();

//the request handling functions
const { registerUser, loginUser } = require("../controllers/userControllers");

//api endpoints with request handler functions
router.post("/register", registerUser);
router.post("/login", loginUser);

//export the router
module.exports = router;
