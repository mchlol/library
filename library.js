// array to hold all the book objects
let myLibrary = [];

// access DOM elements
const container = document.querySelector('.container');
const form = document.querySelector('form');
const addBtn = document.querySelector('#add-button')

// access the individual form elements so we can read their values
let inputTitle = document.querySelector('#title');
let inputAuthor = document.querySelector('#author');
let inputPages = document.querySelector('#pages');
let inputRead = document.querySelector('#read');
// if read checked === true mark book as read

let bookID = 0; // set a global variable 

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookID = bookID++; 
}

// TOOGLE BOOK READ/UNREAD FUNCTION

Book.prototype.bookRead = function() {
    let indexOfThis = myLibrary.indexOf(this);
    myLibrary[indexOfThis].read = !this.read; // set it to it's opposite on click
}

// CREATE THE READ TOGGLE
Book.prototype.createToggle = function(parent) {
        // create the read toggle ...
        let bookReadContainer = document.createElement('div');
        bookReadContainer.setAttribute('id', 'toggle-holder-holder');
        bookReadContainer.classList.add('form-control', 'm-1', 'p-1');
        let bookReadLabel = document.createElement('label');
        bookReadLabel.setAttribute('id', 'toggle-holder');
        bookReadLabel.classList.add('label', 'cursor-pointer', 'self-center', 'justify-center');
        bookReadLabel.setAttribute('for', 'read');
        bookReadLabel.innerHTML = `
        <span class="label-text p-2 text-accent">Read:</span>
        `;

        let readToggle = document.createElement('input');
        readToggle.classList.add('toggle', 'toggle-lg', 'toggle-accent');
        readToggle.setAttribute('type', 'checkbox');

        this.read ? readToggle.checked = true : readToggle.checked = false;

        readToggle.addEventListener('click', this.bookRead.bind(this), false);
        // readToggle.addEventListener('onclick', this.bookRead.bind(this));

        bookReadLabel.appendChild(readToggle);
        bookReadContainer.appendChild(bookReadLabel);
        parent.appendChild(bookReadContainer);
}

// REMOVE BOOK FUNCTION
Book.prototype.removeBook = function() {
    let indexOfThis = myLibrary.indexOf(this);
    myLibrary.splice(indexOfThis,1);
    return displayBooks(myLibrary);
}

// CREATE THE REMOVE BUTTON
Book.prototype.createButton = function(parent) {
    let removeBtn = document.createElement('button');
    removeBtn.classList.add('indicator-item', 'btn-error', 'btn-xs', 'btn-circle', 'm-1', 'text-white', 'removeBtn');
    removeBtn.textContent = "X";
    removeBtn.addEventListener('click', this.removeBook.bind(this), false);
        // removeBtn.addEventListener('onclick', this.removeBook.bind(this));
        parent.appendChild(removeBtn);
}

// GET DATA FROM THE FORM
form.onsubmit = function(e) {
    e.preventDefault();
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked;

    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    form.reset();
    return displayBooks(myLibrary);
}


// DISPLAY FUNCTION
function displayBooks(array) {
    container.innerHTML = ""; // remove everything 
    for (let i = 0; i < array.length; i++) {
        // create card
        let cardWrap = document.createElement('div');
        cardWrap.classList.add('indicator', 'rounded-xl', 'm-w-sm', 'bg-base-100', 'shadow-xl', 'm-4', 'p-4', 'w-auto', 'block');
        
        // button as sibling to cardBody - to create indicator element
        array[i].createButton(cardWrap);
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('text-center', 'm-w-xs'); // removed class 'card-body'
        container.appendChild(cardWrap);
        cardWrap.appendChild(cardBody);

        // append title
        let bookTitle = document.createElement('p');
        bookTitle.classList.add('font-bold', 'text-primary', 'm-w-xs')
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

        // append the read toggle and remove button
        array[i].createToggle(cardBody);
    }
}

// create some objects and add them to the library array
const deepWork = new Book("Deep Work: Rules for Focused Success in a Distracted World", "Cal Newport", 296, true);
const theVirginSuicides = new Book ("The Virgin Suicides","Jeffrey Eugenides",248,true);
const eastOfEden = new Book("East of Eden","John Steinbeck",601,false);
const felafel = new Book("He Died with a Felafel in His Hand","John Birmingham",229,false);
myLibrary.push(deepWork, theVirginSuicides, eastOfEden,felafel);


// CALL THE DISPLAY FUNCTION ON PAGE LOAD
displayBooks(myLibrary);

