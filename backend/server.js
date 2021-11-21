require("dotenv").config("../");
const express = require("express");
// const path = require("path");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes")

const app = express();
const PORT = process.env.port || 3000;
connectDB();
//middleware
app.use(express.static(__dirname + "/Frontend/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoutes);





// app.get("/", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/index.html"))
// );
// app.get("/about", (req, res) =>
//   res.sendFile(path.join(__dirname, "public/about.html"))
// );

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
