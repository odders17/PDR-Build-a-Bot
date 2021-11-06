const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.port || 3001;

//middleware
app.use(express.static());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


