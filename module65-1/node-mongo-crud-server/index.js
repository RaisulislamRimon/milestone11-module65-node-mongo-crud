const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(`Hello from node mongodb crud server ${port}`);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
