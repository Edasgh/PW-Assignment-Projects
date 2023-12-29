const { generateToken } = require("../config/generateToken");
const User = require("../models/userModel");
const Cookies = require("js-cookie");

const registerUser = async (req, res) => {
  try {
    const { name, email, userName, password, bio } = req.body;
    const user = await User.create({ ...req.body });
    if (user) {
      res.status(201).json({
        message: "User Registered Successfully!",
      });
    } else {
      res.status(401);
      throw new Error("Failed to create user");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const logInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);

      res.status(200).json({
        token: token,
        message: "User Logged In Successfully!",
      });
    } else {
      res.status(401);
      throw new Error("Failed to log in user");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getUserData = async (req, res) => {
  try {
    const { email } = req.user;
    const userData = await User.findOne({ email });
    if (userData) {
      res.status(200).json({
        msg: "Success",
        data: userData,
      });
    } else {
      res.status(404);
      throw new Error("Not Found");
    }
  } catch (error) {
    res.status(501).send({ msg: error.message });
  }
};

module.exports = { registerUser, logInUser, getUserData };
