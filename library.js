// container and form
const container = document.querySelector('.container');
const form = document.querySelector('form');
const addBtn = document.querySelector('#add-button')

// inputs
let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let inputRead = document.querySelector('#read');
// if read checked === true mark book as read

// array to hold all the objects
let myLibrary = [];

// book constructor
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

// test default object

const theVirginSuicides = new Book (
    "The Virgin Suicides",
    "Jeffrey Eugenides",
    248,
    true,
);

myLibrary.push(theVirginSuicides);

// take the users input and create an object to be stored in the array
function addToArray(book) {
    // use the constructor on the input data
    book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);

    // push the object to the library array
    myLibrary.push(newBook);

    // display it on the page
    return displayBooks(myLibrary);
}

// display the library array on the page as separate cards
function displayBooks(array) {
    for (let i = 0; i < array.length; i++) {
        // create card
        let cardWrap = document.createElement('div');
        cardWrap.classList.add('card', 'lg:w-72', 'sm:w-2/3', 'bg-base-100', 'shadow-xl', 'm-4', 'p-4');
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-center');
        container.appendChild(cardWrap);
        cardWrap.appendChild(cardBody);

        // append title
        let bookTitle = document.createElement('p');
        bookTitle.classList.add('font-bold', 'text-secondary')
        bookTitle.textContent = `${array[i].title}`;
        cardBody.appendChild(bookTitle);

        // append author
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = `by ${array[i].author}`;
        cardBody.appendChild(bookAuthor);

        // append pages
        let bookPages = document.createElement('p');
        bookPages.textContent = `${array[i].pages} pages`;
        cardBody.appendChild(bookPages);

        // append read
        let bookRead = document.createElement('p');
        if (array[i].read) { // if true display in accent colour
        bookRead.textContent = "Read";
        bookRead.classList.add('text-accent');
        } else { // if false display in grey
        bookRead.textContent = "Unread";
        bookRead.classList.add('text-gray-400')
        }
        
        cardBody.appendChild(bookRead);
    }
}

// call the display function!
// displayBooks(myLibrary);

addBtn.addEventListener('click', clickHandler());

function clickHandler(event) {
    store();
}

// form.onsubmit = function(event) {
//     event.preventDefault();
//     addToArray(event);
//     myLibrary.push(Book);
//     displayBooks(myLibrary);
// }

function store() {
    let inputTitle = document.querySelector("#bookTitle");
    localStorage.setItem("bookTitle", inputTitle.value);
}