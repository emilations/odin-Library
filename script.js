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

updateTable()
let addButton = document.querySelector(".btn.btn-primary.add-button");
addButton.addEventListener("click", getBook)

function updateTable() {
  let tableData = document.createElement("tbody");
  for (let index in myLibrary) {
    let row = tableData.insertRow();
    let title = row.insertCell(0);
    let author = row.insertCell(1);
    let pages = row.insertCell(2);
    let read = row.insertCell(3);
    title.innerText = myLibrary[index].title;
    author.innerText = myLibrary[index].author;
    pages.innerText = myLibrary[index].pages;
    read.innerText = myLibrary[index].read;
  }
  let old_tbody = document.querySelector("tbody");
  old_tbody.parentNode.replaceChild(tableData, old_tbody)
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.add = function () {
  myLibrary.push({
    title: this.title,
    author: this.author,
    pages: this.pages,
    read: this.read,
  });
};

function getBook () {
  let title = document.querySelector('input[name="title"]');
  let author = document.querySelector('input[name="author"]');
  let pages = document.querySelector('input[name="pages"]');
  let read = document.querySelector('input[name="read"]:checked');
  let book = new Book(title.value, author.value, pages.value, read.value);
  book.add();
  updateTable();
  title.value = author.value = pages.value = ""
}

function addBookToLibrary() {
  // call method on book to add book to library array
}

// var table = document.getElementById("myTable");
// var row = table.insertRow();
// var cell1 = row.insertCell();
// cell1.innerHTML = "asd"