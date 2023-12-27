// import the mongoose and the Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;
// import the bcryptjs module
const bcrypt = require("bcryptjs");

//creating a new Schema
const userModel = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

//defining a method into the Schema
userModel.methods.matchPassword = async function (enteredPW) {
  //assigning the method into the model itself to check passwords easily
  return await bcrypt.compare(enteredPW, this.password);
};

userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  //hash the password before saving
});

//assigning the Schema to create a mongoose model
const User = mongoose.model("User", userModel);

//export the model
module.exports = User;
