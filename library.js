const container = document.querySelector('.container');
const bookInfo = document.querySelector('#book-info');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = function () {
    //     let printInfo = `${title} by ${author}, ${pages} pages, ${read}`;
    //     return printInfo;
    // }
}

Book.prototype.info = function () {
    this.printInfo = `${title} by ${author}, ${pages} pages, ${read}`;
    return printInfo;
};

const theVirginSuicides = new Book (
    "The Virgin Suicides",
    "Jeffrey Eugenides",
    "226",
    true,
);

myLibrary.push(theVirginSuicides);

function addToLibrary() {
    // loop over library array and display on page
}

