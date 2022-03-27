const container = document.querySelector('.container');

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read;
    }

    printInfo() {
        return `${title} by ${author}, ${pages} pages, read: ${read}`
    }
}

const theVirginSuicides = new Book (
    "The Virgin Suicides",
    "Jeffrey Eugenides",
    248,
    true,
);

myLibrary.push(theVirginSuicides);

const steveJobs = new Book (
    "Steve Jobs",
    "Walter Isaacson",
    710,
    false,
)

myLibrary.push(steveJobs);

function displayBooks(array) {
    for (let i = 0; i < array.length; i++) {
        // create card
        let cardWrap = document.createElement('div');
        cardWrap.classList.add('card', 'w-96', 'bg-base-100', 'shadow-xl');
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        container.appendChild(cardWrap);
        cardWrap.appendChild(cardBody);

        // append title
        let bookTitle = document.createElement('p');
        bookTitle.textContent = `Title: ${array[i].title}`;
        cardBody.appendChild(bookTitle);

        // append author
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Author: ${array[i].author}`;
        cardBody.appendChild(bookAuthor);

        // append pages
        let bookPages = document.createElement('p');
        bookPages.textContent = `Pages: ${array[i].pages}`;
        cardBody.appendChild(bookPages);

        // append read
        let bookRead = document.createElement('p');
        if (array[i].read) {
        bookRead.textContent = "Read";
        } else {
        bookRead.textContent = "Unread";
        }
        cardBody.appendChild(bookRead);
    }
}

displayBooks(myLibrary);
