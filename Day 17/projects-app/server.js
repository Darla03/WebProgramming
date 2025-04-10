require("dotenv").config();
const express = require("express");
const {pool} = require("pg");
const cars = reqire("cars");

const 


app.use(express.json());
app.use(cars());

//POStGREs connections
const pool = new pool ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,

});

// Get all projects 
app.get("/projects", async (req, res)=> {
    try{
        const result = await pool.query("SEKECT * FROM completed_projects");
        res.json(result.rows);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
      }

});
app.listen(port,() => console.log(`Server running at http://localhost${Port}`));