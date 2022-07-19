let book;
let myLibrary = [
  {
    title: "Weather Fying",
    author: "Robert N. Buck",
    pages: 417,
    read: "Not read yet",
  },
  {
    title: "Le Petit Prince",
    author: "Antoine de Stain-Exupery",
    pages: 140,
    read: "Not read yet",
  },
];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// Initiate first table population
updateTable()

// Add listener on Add book button in the modal
let addButton = document.querySelector(".btn.btn-primary.add-button");
addButton.addEventListener("click", addBookToLibrary)

//Add listenner on Delete book button in the table 



// -------------------------------------------------------------------

function addBookToLibrary() {
  getBook();
  myLibrary.push({
    title: book.title,
    author: book.author,
    pages: book.pages,
    read: book.read,
  });
  updateTable();
}

function getBook() {
  let title = document.querySelector('input[name="title"]');
  let author = document.querySelector('input[name="author"]');
  let pages = document.querySelector('input[name="pages"]');
  let read = document.querySelector('input[name="read"]:checked');
  book = new Book(title.value, author.value, pages.value, read.value);
  // Empty form after submission
  title.value = author.value = pages.value = "";
}

function updateTable() {
  let tableData = document.createElement("tbody");
  for (let index in myLibrary) {
    let row = tableData.insertRow();
    let title = row.insertCell(0);
    let author = row.insertCell(1);
    let pages = row.insertCell(2);
    let read = row.insertCell(3);
    let deleteButton = row.insertCell(4);
    title.innerText = myLibrary[index].title;
    author.innerText = myLibrary[index].author;
    pages.innerText = myLibrary[index].pages;
    read.innerText = myLibrary[index].read;
    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.classList.add("button--delete");
    btn.dataset.index = index;
    deleteButton.appendChild(btn);
  }
  let old_tbody = document.querySelector("tbody");
  old_tbody.parentNode.replaceChild(tableData, old_tbody)
  let deleteButtons = document.querySelectorAll(".button--delete");
  deleteButtons.forEach(button => button.addEventListener("click", deleteBookEntry))
  console.log(deleteButtons)
}

function deleteBookEntry(e) {
  myLibrary.splice(e.target.dataset.index, 1)
  updateTable()
}