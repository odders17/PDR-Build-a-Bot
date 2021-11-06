const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.port || 3001;

//middleware
app.use(express.static());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
