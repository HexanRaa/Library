let myLibrary = [
  {
    title: "Harry Potter",
    description:
      "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry",
    author: "J. K. Rowling",
    pages: 234,
    publisheddate: "June 26, 1997",
    read: true,
  },
  {
    title: "A Game of Thrones",
    description:
      "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin",
    author: "George R. R. Martin",
    pages: 678,
    publisheddate: "August 1, 1996",
    read: false,
  },
  {
    title: "Harry Potter",
    description:
      "The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry",
    author: "J. K. Rowling",
    pages: 234,
    publisheddate: "June 26, 1997",
    read: true,
  },
  {
    title: "A Game of Thrones",
    description:
      "A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by American author George R. R. Martin",
    author: "George R. R. Martin",
    pages: 678,
    publisheddate: "August 1, 1996",
    read: false,
  },
];

// Book Constructor
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

// function to Display Books
function displayBooks() {
  const booksContainer = document.querySelector(".books-container");
  myLibrary.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("card");

    const bookName = document.createElement("h3");
    bookName.textContent = book.title;

    const bookDescribe = document.createElement("p");
    bookDescribe.textContent = book.description;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = "Author: " + book.author;

    const bookPages = document.createElement("p");
    bookPages.textContent = "Pages: " + book.pages;

    const bookPublishedDate = document.createElement("p");
    bookPublishedDate.textContent = "Published Date: " + book.publisheddate;

    const bookRead = document.createElement("p");
    bookRead.textContent = book.read;

    card.appendChild(bookName);
    card.appendChild(document.createElement("hr"));
    card.appendChild(bookDescribe);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookPublishedDate);
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
