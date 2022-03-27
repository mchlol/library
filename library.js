const container = document.querySelector('.container');
const bookTitle = document.createElement('p');

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

// test function added to Book prototype
Book.prototype.sayHello = function () {
    return console.log(`${this.title} say hi!`)
}


const theVirginSuicides = new Book (
    "The Virgin Suicides",
    "Jeffrey Eugenides",
    "226",
    true,
);

myLibrary.push(theVirginSuicides);

function createCard() {
    let cardWrap = document.createElement('div');
    cardWrap.classList.add('card w-96 bg-base-100 shadow-xl');
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    container.appendChild(cardWrap);
    cardWrap.appendChild(cardBody);
}

function appendToCard(book) {
    let bookTitle = document.createElement('p');
    bookTitle.textContent = book.title;
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = book.author;
    let bookPages = document.createElement('p');
    bookPages.textContent = book.pages;
    let bookRead = document.createElement('p');
    bookRead.textContent = book.read;

}

function displayBooks(array) {
    for (let i = 0; i <= array.length; i++) {
        createCard(array.i);
        appendToCard(array.i);
    }
}

displayBooks(myLibrary);
