const express = require("express");
const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Passes control from this middleware to the next
});

let todos = [
    { id: 1, task: "Learn Express", completed: false },
    { id: 2, task: "Build REST API", completed: false },
];

// Get all todos
app.get("/todos/test", (req, res) => {
    res.json(todos);
});

// Get a single todo by ID (fixed typo in comment)
app.get("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));

    todo ? res.json(todo) : res.status(404).json({ message: "Todo not found" });
});

//posting a new todo!
app.post("/todos/new", (req, res)=>{
    const newTodo = {id:todos.length, task: req.body.tast, completed:false};
    todos.push(newTodo);
    res.status(201).json(newTodo);
});
//put (update ) a todo
app.put("/todos/:id", (req,res)=>{
    const todo=todos.find((t)=>t.id ===parseInt(req.params.id));
    if(todo){
        todo.task = req.body.task || todo.task;
        todo.completed = req.body.completed !== underfined ? resizeBy.body.completed:
        todo.completed;
        res.json(todo)
    }
    else{
        res.status(404).json ({message:"Todo not found!"})
    }
});

app.delete("/todos/:id",(req,res)=>{
    todos = todos.filter((t)=> t.id !== parseInt(req.params.id));
    res.json({message:"Todo Deleted!"});
});

//error handling 
app.use((err, req, res, next)=>{
    console.error(err,stack);
    res.status(500).json({Message:"Something went wrong!"});
});

// Starting server...
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
