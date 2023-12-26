const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "I am homePage" });
});

app.get("/about", (req, res) => {
  res.send({ msg: "I am about page" });
});

app.get("/contact", (req, res) => {
  res.send({ email: "support@pwskills.com" });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
