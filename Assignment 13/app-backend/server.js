
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");



const app =express();
const PORT =5001;

app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true, 
  })
);

//middleWare 
app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=> console.log('MongoDB Connect'))
.catch((err) => console.error('MongoDB error', err));


//schema

const postSchema = new mongoose.Schema(
  {
    title:String,
    body: String,
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

//adding routes here 

app.get('/posts', async (req,res)=> {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.status(500).json({message: 'Failed to fetch posts'});
    }
});

app.post('/posts', async (req,res)=>{
    try{
        const {title, body} = req.body;
        const newPost = new Post ({title, body});
        await newPost.save();
        res.json(newPost);
    }catch(err){
        res.status(500).json({message:'Failed to save post'});
    }
});

app.put("/posts/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    const updated = await Post.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update post" });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete post" });
  }
});
      //starting server....

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});