const express = require("express");
const app = express();
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const port = 8080;

app.use(express.json());
app.use("/", userRoutes);

app.listen(port, async () => {
  await connectDB();
  console.log(`Server listening at http://localhost:${port}`);
});
