const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON in the request body

// Array to store the blog posts (sample data)
let blogPosts = [
  { id: 1, title: "First Post", content: "This is the first blog post." },
  { id: 2, title: "Second Post", content: "This is the second blog post." },
];

// Endpoint: GET /posts
app.get("/posts", (req, res) => {
  res.json(blogPosts);
});

// Endpoint: GET /posts/:id
app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    res.status(404).json({ error: "Post not found" });
  } else {
    res.json(post);
  }
});

// Endpoint: POST /posts
app.post("/posts", (req, res) => {
  const { id, title, content } = req.body;

  if (!id || !title || !content) {
    res.status(400).json({ error: "Incomplete data" });
  } else {
    const newPost = { id, title, content };
    blogPosts.push(newPost);
    res.status(201).json(newPost);
  }
});

// Endpoint: DELETE /posts/:id
app.delete("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = blogPosts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    res.status(404).json({ error: "Post not found" });
  } else {
    const deletedPost = blogPosts.splice(postIndex, 1);
    res.json(deletedPost[0]);
  }
});

// Endpoint: PUT /posts/:id
app.put("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = blogPosts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    res.status(404).json({ error: "Post not found" });
  } else if (!title || !content) {
    res.status(400).json({ error: "Incomplete data" });
  } else {
    blogPosts[postIndex] = { ...blogPosts[postIndex], title, content };
    res.json(blogPosts[postIndex]);
  }
});

// Endpoint: PATCH /posts/:id
app.patch("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = blogPosts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    res.status(404).json({ error: "Post not found" });
  } else {
    if (title) {
      blogPosts[postIndex].title = title;
    }
    if (content) {
      blogPosts[postIndex].content = content;
    }
    res.json(blogPosts[postIndex]);
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
