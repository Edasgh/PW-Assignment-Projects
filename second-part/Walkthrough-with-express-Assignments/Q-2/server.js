const express = require("express");

const port = 3000;
const app = express();
let counterData = 0;

app.get("/", (req, res) => {
  res.send({ counter: counterData });
});

app.get("/increment", (req, res) => {
  counterData += 1;
  res.send({ counter: counterData });
});

app.get("/decrement", (req, res) => {
  counterData -= 1;
  res.send({ counter: counterData });
});

app.listen(port, () => {
  console.log(`Counter app server listening at http://localhost:${port}`);
});
