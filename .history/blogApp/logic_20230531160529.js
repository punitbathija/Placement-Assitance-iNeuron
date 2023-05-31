const blogContainer = document.getElementById("blogContainer");
const addBlogForm = document.getElementById("addBlogForm");

// Fetch data from API and display in UI
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      createBlogPost(post);
    });
  });

// Create a new blog post
function createBlogPost(post) {
  const blogDiv = document.createElement("div");
  blogDiv.classList.add("blog");

  const title = document.createElement("h3");
  title.innerText = post.title;

  const body = document.createElement("p");
  body.innerText = post.body;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => {
    deleteBlogPost(post.id);
  });

  blogDiv.appendChild(title);
  blogDiv.appendChild(body);
  blogDiv.appendChild(deleteBtn);

  blogContainer.appendChild(blogDiv);
}

// Add event listener to the form submission
addBlogForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const titleInput = document.getElementById("title");
  const bodyInput = document.getElementById("body");

  const newPost = {
    title: titleInput.value,
    body: bodyInput.value,
  };

  createBlogPost(newPost);

  titleInput.value = "";
  bodyInput.value = "";
});

// Delete a blog post
function deleteBlogPost(id) {
  const postDiv = document.getElementById(id);
  if (postDiv) {
    postDiv.remove();
  }
}
