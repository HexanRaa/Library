let myLibrary = [];

// Book Constructor
function Book(title, author, pages, date, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(
    new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      "789",
      "August 1, 1996",
      true
    )
  );
  myLibrary.push(
    new Book("Harry Potter", "J. K. Rowling", "689", "June 26, 1997", false)
  );
  myLibrary.push(
    new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      "789",
      "August 1, 1996",
      true
    )
  );
  myLibrary.push(
    new Book("Harry Potter", "J. K. Rowling", "689", "June 26, 1997", false)
  );
  myLibrary.push(
    new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      "789",
      "August 1, 1996",
      true
    )
  );
  myLibrary.push(
    new Book("Harry Potter", "J. K. Rowling", "689", "June 26, 1997", false)
  );
  myLibrary.push(
    new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      "789",
      "August 1, 1996",
      true
    )
  );
  myLibrary.push(
    new Book("Harry Potter", "J. K. Rowling", "689", "June 26, 1997", false)
  );
  myLibrary.push(
    new Book(
      "A Game of Thrones",
      "George R. R. Martin",
      "789",
      "August 1, 1996",
      true
    )
  );
  myLibrary.push(
    new Book("Harry Potter", "J. K. Rowling", "689", "June 26, 1997", false)
  );
}

// function to Display Books
function displayBooks() {
  const booksContainer = document.querySelector(".books-container");
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    const bookName = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookPages = document.createElement("p");
    const bookPublishedDate = document.createElement("p");
    const bookRead = document.createElement("p");

    card.classList.add("card");

    bookName.textContent = book.title;
    bookAuthor.textContent = "Author: " + book.author;
    bookPages.textContent = "Pages: " + book.pages;
    bookPublishedDate.textContent = "Published Date: " + book.date;
    bookRead.textContent = book.read;

    card.appendChild(bookName);
    card.appendChild(document.createElement("hr"));
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookPublishedDate);
    card.appendChild(bookRead);
    booksContainer.appendChild(card);
  });
}

addBookToLibrary();
displayBooks();

const form = document.querySelector(".form-modal");
const overlay = document.getElementById("overlay");
const newBookBtn = document.querySelector(".newbookbtn");
const closeBtn = document.getElementById("closebtn");

newBookBtn.addEventListener("click", displayForm);

closeBtn.addEventListener("click", closeForm);

function displayForm() {
  overlay.classList.add("active");
  form.classList.add("active");
}

function closeForm() {
  overlay.classList.remove("active");
  form.classList.remove("active");
}
