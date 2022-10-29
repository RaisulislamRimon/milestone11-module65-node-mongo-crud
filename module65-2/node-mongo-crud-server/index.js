const express = require("express");
const cors = require("cors");
// import { MongoClient } from "mongodb";

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// user : dbuser2
// password: YQdOO1e5nrEvDXKR

// async await
// async function run() {
//   // fetch(``)
//   // try {
//   // }
//   // catch() {
//   // }
//   // finally{
//   // }
// }

// run().catch((error) => console.error(error));

app.get("/", (req, res) => {
  res.send(`Hello from node mongodb crud server ${port}`);
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
