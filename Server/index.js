const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
require("dotenv/config");
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/admin/", require("./api/admin"));
app.use("/api/student/", require("./api/student"));

//Database Connection
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
