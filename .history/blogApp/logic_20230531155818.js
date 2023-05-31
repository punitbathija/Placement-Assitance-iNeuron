let add = document.querySelector("#add");
let form = document.querySelector("#form");
let submit = document.querySelector("#submit");
let container = document.querySelector("#container");

let myBlog = [];

let results = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.json())
  .then((blogs) => {
    console.log(blogs);
  });


function displayBooks(){
    let card 
    let text
    let id
    let remove
    let blog = myBlog;

    
    for (let i = 0; i < myBooks.length; i++) {
        blog = [];
        card = document.createElement("div");
        card.classList.add("card");
        container.appendChild(card);
    
        text = document.createElement("div");
        card.classList.add("text");
        card.appendChild(text);
        text.innerText = `Id :   ${id = id+1}
                          Author : ${author.value}
                          Pages :  ${numberOfPages.value}
                          Read :${read.value} `;
    
        remove = document.createElement("div");
        remove.classList.add("remove");
        card.append(remove);
        remove.innerText = "❌";
      }
    
      // this will remove the books when the remove is triggered
    
      remove = document.querySelectorAll(".remove");
    
      for (let i = 0; i < remove.length; i++) {
        remove[i].dataset.num = i;
      }
    
      remove.forEach((tile) => {
        tile.addEventListener("click", (e) => {
          con.removeChild(card);
          // let index = remove.dataset.num;
          // myBooks.splice(index, 1);
        });
      });
    }
}