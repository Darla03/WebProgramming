const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = 3000;

const uri = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(uri);

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("profileDB");

    const info = await db.collection("info").find().toArray();
    const projects = await db.collection("projects").find().toArray();

    res.render("index", { info, projects });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

