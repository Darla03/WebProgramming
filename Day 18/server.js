
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app =express();
const PORT =5000;

//middleWare 
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> console.log('MongoDB Connect'))
.catch() ((err)=> console.error('MongoDB error', err))

//define schema and model 

const postSchema = new mongoose.Schema({
    title:String,
    body: String,
});

const post = mongoose.model('Post', postSchema);

//add routes 

app.get('/posts', async (req,res)=> {
    try{
        const posts = await post.find();
        res.json(posts);
    }catch(err){
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req,res)=>{
    try{
        const {title, body} = req.body;
        const newPost = new post ({title, body});
        await newPost.save();
        res.json(newPost);
    }catch(err){
        res.status(500).json({message:'Failed to save post'});
    }
});

//start server 

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});