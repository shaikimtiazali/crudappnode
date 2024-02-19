const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
const app = express();
require("dotenv").config();
const MONGODB_URI = "mongodb://localhost:27017/Node-API";

// const PORT = process.env.PORT || 3009;

const PORT = 3006;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRoute);

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/", (_req, res) => {
  res.send("Working");
});

app.listen(PORT, () => console.log(`Server is running ${PORT}`));
