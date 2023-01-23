let myLibrary = [
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pages: 234,
    read: true,
  },
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 678,
    read: false,
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pages: 234,
    read: true,
  },
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 678,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let newBook = new Book("abcd", "dsfasdg", "123", true);
  let newBook2 = new Book("abcd", "dsfasdg", "123", true);
  return myLibrary.push(newBook, newBook2);
}

function displayBooks() {
  const booksContainer = document.querySelector(".books-container");
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");
    const bookName = document.createElement("h1");
    bookName.textContent = book.title;
    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author: " + book.author;
    const bookPages = document.createElement("p");
    bookPages.textContent = book.pages;
    const bookRead = document.createElement("p");
    bookRead.textContent = book.read;
    card.appendChild(bookName);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookRead);
    booksContainer.appendChild(card);
  });
}

displayBooks();

console.log(myLibrary);

// const form = document.querySelector("div");
// const newBookBtn = document.querySelector(".newbookbtn");

// newBookBtn.addEventListener("click", () => {
//   form.classList.toggle("hidden");
// });
