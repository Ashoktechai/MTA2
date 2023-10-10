const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authController = require("./components/authController");
const roomController = require("./components/roomController");
const uploadController = require("./components/uploadController");

const app = express();

// Database Connection
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Database Connected");
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));
app.use("/auth", authController);
app.use("/room", roomController);
app.use("/upload", uploadController);

// Server Connection

app.listen(process.env.PORT, () => {
  console.log("Server connected");
});
