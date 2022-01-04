const express = require("express");
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Api Working");
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
