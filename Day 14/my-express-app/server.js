const express = require('express');
const app = express();

const users = [
    {id:1, name: "Alice"},
    {id:2, name: "Bob"},
];

const products= [
    {id:1, name: "Laptop", price:999},
    {id:2, name: "Phone", price: 699},
];

//Routing...
app.get("/", (req,res) =>
res.send("Welcome to my API!"));

//start server 
const PORT =3000;
app.listen(PORT,()=>
console.log('Server running on http://localhost:${PORT}'));

