require("dotenv").config("../");
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    // console.log("inside try");
    // const db = await mongoose.connect(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    console.log("inside try");
    await mongoose.connect(
      "mongodb+srv://BuildaBot:BuildaBot@cluster0.oqw1y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("mongodb connection success");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
