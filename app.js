let myLibrary = [];

// Book Constructor
function Book(title, author, pages, date, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

const submitBtn = document.getElementById("submitbtn");
submitBtn.addEventListener("click", getUserData);

const msg = document.querySelector(".msg");
//Getting book data from user
function getUserData(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const date = document.getElementById("pdate").value;
  const readBtn = document.getElementById("read");
  const notReadBtn = document.getElementById("notread");
  let read;

  if (title === "" || author === "" || pages === "") {
    msg.textContent = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
    getUserData();
  }

  if (readBtn.checked) {
    read = true;
  } else if (notReadBtn.checked) {
    read = false;
  }

  console.log(title);

  addBookToLibrary(title, author, pages, date, read);
}

// Adding new Books to the myLibrary Array
function addBookToLibrary(title, author, pages, date, read) {
  if (checkBook(title)) {
    msg.textContent = "This book has been already added";
    setTimeout(() => msg.remove(), 3000);
    getUserData();
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
  booksContainer.textContent = "";
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    const bookName = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookPublishedDate = document.createElement("p");
    const bookRead = document.createElement("button");
    const bookLine = document.createElement("hr");
    const bookRemoveBtn = document.createElement("button");

    bookRemoveBtn.textContent = "Remove Book";
    card.classList.add("card");
    bookRead.classList.add("btn", "readbtn");
    bookRead.addEventListener("click", () => toggleRead(book));
    bookRemoveBtn.classList.add("btn");
    bookRemoveBtn.addEventListener("click", () => removeBook(book));

    if (book.read) {
      bookLine.classList.add("read");
      bookRead.textContent = "Read";
    } else {
      bookLine.classList.add("notread");
      bookRead.textContent = "Not Read";
    }

    bookName.textContent = book.title;
    bookAuthor.textContent = "Author: " + book.author;
    bookPages.textContent = "Pages: " + book.pages;
    bookPublishedDate.textContent = "Published Date: " + book.date;

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

// Checking Books Array for Existing Books
function checkBook(title) {
  return myLibrary.some(book => book.title === title);
}

function removeBook(book) {
  const index = myLibrary.indexOf(book);
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleRead(book) {
  book.toggleRead();
  displayBooks();
}

// Form popup and close
const form = document.querySelector(".form-modal");
const overlay = document.getElementById("overlay");
const newBookBtn = document.querySelector(".newbookbtn");
const closeBtn = document.getElementById("closebtn");
const resetBtn = document.getElementById("resetbtn");
const readBtn = document.querySelector("readbtn");

// readBtn.addEventListener("click", bookReadfunc);

newBookBtn.addEventListener("click", displayForm);

closeBtn.addEventListener("click", closeForm);

overlay.addEventListener("click", closeForm);

resetBtn.addEventListener("click", resetForm);

// function bookReadfunc() {}

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
