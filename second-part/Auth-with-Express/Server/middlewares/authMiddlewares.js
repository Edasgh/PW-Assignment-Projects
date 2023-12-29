const Cookies = require("js-cookie");
const signupDataValidate = async (req, res, next) => {
  try {
    const { name, userName, email, password, bio } = req.body;

    if (name && email && password && userName) {
      next();
    } else {
      res.status(400).send({ msg: "Please fill all the fields!" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};

const loginDataValidate = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email && password) {
      next();
    } else {
      res.status(400).send({ msg: "Please fill all the fields!" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Internal Server Error" });
  }
};
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

const User = require("../models/userModel");
const authenticateUser = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decodes token id
      const decoded = jwt.verify(token, jwt_secret);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401).send({ msg: "Not authorized, token failed!" });
    }
  } else {
    res.status(401).send({ msg: "Not authorized, no token!" });
  }
};

module.exports = { signupDataValidate, loginDataValidate, authenticateUser };
