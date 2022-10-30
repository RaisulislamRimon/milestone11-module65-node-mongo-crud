const express = require("express");
const cors = require("cors");
// import { MongoClient } from "mongodb";
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// user : dbuser2
// password: YQdOO1e5nrEvDXKR

const uri =
  "mongodb+srv://dbuser2:YQdOO1e5nrEvDXKR@cluster0.q2puyhe.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("nodeMongoCrud").collection("users");
    // const user = { name: "new user", email: "newuser@gmail.com" };
    // const result = await userCollection.insertOne(user);
    // console.log(result);
    app.post("/users", (req, res) => {
      const user = req.body;
      console.log(user);
    });
  } finally {
  }
}

run().catch((error) => console.log(error));

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
