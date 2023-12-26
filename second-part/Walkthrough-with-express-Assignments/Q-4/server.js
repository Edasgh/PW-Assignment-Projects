const express = require("express");

const app = express();
const port = 3000;

//function to generate the random number
const generateRandomNumber = () => {
  let random = Math.floor(Math.random() * 100); //a random number from 0 to 100

  return random;
};

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Random Number Generator</h1>");
});

app.get("/random", (req, res) => {
  let generatedRandom = generateRandomNumber();
  res.send({ random: generatedRandom });
});

app.listen(port, () => {
  console.log(`Server Listening at http://localhost:${port}`);
});
