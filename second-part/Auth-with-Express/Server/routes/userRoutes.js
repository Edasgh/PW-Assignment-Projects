const express = require("express");
const {
  signupDataValidate,
  loginDataValidate,
  authenticateUser,
} = require("../middlewares/authMiddlewares");
const {
  registerUser,
  logInUser,
  getUserData,
} = require("../controllers/userControllers");
const userRoutes = express.Router();

userRoutes.post("/signup", signupDataValidate, registerUser);
userRoutes.post("/login", loginDataValidate, logInUser);
userRoutes.get("/", authenticateUser, getUserData);

module.exports = userRoutes;
