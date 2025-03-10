const express = require('express');
const app = express();

const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
];

const products = [
    {id: 1, name: "Laptop", price: 999},
    {id: 2, name: "Phone", price: 699},
];

const shoes = [
    {id: 1, name: "Nike", price: 100},
    {id: 2, name: "addidas", price: 85},
];

const fruits = [
    {id: 1, name: "Apple", price: 2},
    {id: 2, name: "Pear", price: 3},
];

const haircolor = [
    {id: 1, name: "Black", price: 2},
    {id: 2, name: "Brown", price: 3},
];

// Routing...
app.get("/", (req, res) =>
    res.send("Welcome to my API!")
);

app.get("/users", (req, res) =>
    res.json(users)
);

app.get("/products", (req, res) =>
    res.json(products)
);

app.get("/products/shoes", (req, res) =>
    res.json(shoes)
);

app.get("/fruits", (req, res) =>
    res.json(fruits)
);

app.get("/haircolor", (req, res) =>
    res.json(haircolor)
);

// Start server 
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
