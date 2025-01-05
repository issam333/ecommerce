const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connectedDB successfully ✅ ");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message} ❌ `);
  }
};

module.exports = connectDB;
