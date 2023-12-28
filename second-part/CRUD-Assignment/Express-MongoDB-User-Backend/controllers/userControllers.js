//import the "User" model
const User = require("../models/userModel");

//function to register an user
const registerUser = async (req, res) => {
  try {
    //get all the values from the request body
    const { name, email, password } = req.body;
    //don't register a user if any of the values is absent
    if (!name || !email || !password) {
      res.status(400);

      throw new Error("Please fill all the fields!");
    }

    //checking if an user with the same email already exists in the DB
    const userAlreadyExists = await User.findOne({ email });

    if (userAlreadyExists) {
      //if an user with the same email already exists in the DB, then don't create another user with the same email
      res.status(400);

      throw new Error("User already Exists!");
    }

    // create an user with the entered credentials
    const user = await User.create({
      ...req.body,
    });
    if (user) {
      // if the user is sucessfully created at the database, send the success statusCode and the user details as response
      res.status(201).json([
        {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        { message: "User Registered Successfully!" },
      ]);
    } else {
      // if somehow user creation fails, throw an error
      res.status(400);
      throw new Error("Failed to create user!");
    }
  } catch (error) {
    //handle the error here
    res.status(500).send({ message: error.message });
  }
};

//function to login an user
const loginUser = async (req, res) => {
  try {
    //get the email and the password from the request body
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(401);
      throw new Error("Please fill all the fields!");
    }
    //find an user with this email
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      // if an user is found, send the response object to backend
      res.json([
        {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
        { message: "User Logged In Successfully!" },
      ]);
    } else {
      // if somehow user log-in fails, throw an error
      res.status(400);
      throw new Error("Invalid Email or Password!");
    }
  } catch (error) {
    // handle the error here
    res.status(500).send({ message: error.message });
  }
};

//export the registerUser and the loginUser function
module.exports = { registerUser, loginUser };
