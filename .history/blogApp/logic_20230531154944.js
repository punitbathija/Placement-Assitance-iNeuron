let add = document.querySelector("#add");
let form = document.querySelector("#form");
let submit = document.querySelector("#submit");
let container = document.querySelector("#container");

let myBlog = [];

let results = fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
  res.json()
);
