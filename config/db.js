const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  try {
    console.log("inside try");
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("mongodb connection success", db);
  } catch (error) {
    console.log(error);
    console.error("mongodb connection failed");
    process.exit(1);
  }
};

module.exports = connectDB;
