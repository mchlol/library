const container = document.querySelector('.container');
const bookInfo = document.querySelector('#book-info');

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.printInfo = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

Book.prototype.printInfo = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
};

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

function addToLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        
    }
}

bookInfo.textContent = theVirginSuicides.printInfo();
