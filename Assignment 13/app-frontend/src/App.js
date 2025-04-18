import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: "", body: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    axios
      .get("http://localhost:5001/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or Update post
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      axios
        .put(`http://localhost:5001/posts/${editingId}`, form)
        .then((res) => {
          setPosts(posts.map((p) => (p._id === editingId ? res.data : p)));
          setForm({ title: "", body: "" });
          setEditingId(null);
        })
        .catch((err) => console.error("Error updating post:", err));
    } else {
      axios
        .post("http://localhost:5001/posts", form)
        .then((res) => {
          setPosts([res.data, ...posts]);
          setForm({ title: "", body: "" });
        })
        .catch((err) => console.error("Error submitting post:", err));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      axios
        .delete(`http://localhost:5001/posts/${id}`)
        .then(() => {
          setPosts(posts.filter((post) => post._id !== id));
        })
        .catch((err) => console.error("Error deleting post:", err));
    }
  };

  const handleEdit = (post) => {
    setForm({ title: post.title, body: post.body });
    setEditingId(post._id);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>{editingId ? "Edit Post" : "Leave a review"}</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          name="title"
          placeholder="Subject"
          value={form.title}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <textarea
          name="body"
          placeholder="Review here"
          value={form.body}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "10px",
            height: "100px",
            marginBottom: "10px",
          }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          {editingId ? "Update Post" : "Submit Post"}
        </button>
      </form>

      <h2>Reviews</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length === 0 ? (
        <p>No Reviews yet.</p>
      ) : (
        posts.map((post) => (
          <div
            key={post._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "15px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small>
              Posted on: {new Date(post.createdAt).toLocaleString()}
            </small>
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => handleEdit(post)} style={{ marginRight: "10px" }}>
                Edit
              </button>
              <button onClick={() => handleDelete(post._id)} style={{ color: "red" }}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default App;

