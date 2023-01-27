let myLibrary = [];

// Book Constructor
function Book(title, author, pages, date, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.read = read;
}

const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener("click", getUserData);

function getUserData() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const date = document.getElementById("pdate").value;
  addBookToLibrary(title, author, pages, date, "yes");
}

function addBookToLibrary(title, author, pages, date, read) {
  if (checkBook(title)) {
    alert("This book has been added");
  } else {
    myLibrary.push(new Book(title, author, pages, date, read));
  }
  resetForm();
  closeForm();
  displayBooks();
}

// function to create Book Cards and Display Books Cards
function displayBooks() {
  console.log(myLibrary);
  const booksContainer = document.querySelector(".books-container");
  booksContainer.innerHTML = "";
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    const bookName = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookPublishedDate = document.createElement("p");
    const bookRead = document.createElement("p");
    const bookLine = document.createElement("hr");
    const bookRemoveBtn = document.createElement("button");

    bookRemoveBtn.textContent = "Remove Book";
    card.classList.add("card");
    bookRemoveBtn.classList.add("btn");

    bookName.textContent = book.title;
    bookAuthor.textContent = "Author: " + book.author;
    bookPages.textContent = "Pages: " + book.pages;
    bookPublishedDate.textContent = "Published Date: " + book.date;
    bookRead.textContent = book.read;

    card.appendChild(bookName);
    card.appendChild(bookLine);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookPublishedDate);
    card.appendChild(bookRead);
    card.appendChild(bookRemoveBtn);
    booksContainer.appendChild(card);
  });
}

function checkBook(title) {
  return myLibrary.some(book => book.title === title);
}

// Form popup and close
const form = document.querySelector(".form-modal");
const overlay = document.getElementById("overlay");
const newBookBtn = document.querySelector(".newbookbtn");
const closeBtn = document.getElementById("closebtn");
const resetBtn = document.getElementById("resetbtn");

newBookBtn.addEventListener("click", displayForm);

closeBtn.addEventListener("click", closeForm);

overlay.addEventListener("click", closeForm);

resetBtn.addEventListener("click", resetForm);

function displayForm() {
  overlay.classList.add("active");
  form.classList.add("active");
}

function closeForm() {
  overlay.classList.remove("active");
  form.classList.remove("active");
}

function resetForm() {
  document.querySelectorAll("input").forEach(inputs => {
    inputs.value = "";
  });
}
