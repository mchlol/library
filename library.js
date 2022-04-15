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

let bookID = 0;

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookID = bookID++; // increment the global bookID variable so every object has a uniqe bookID, even when objects are removed from the array

    // create the remove button & add the classes & textContent
    this.removeBtn = document.createElement('button');
        removeBtn.classList.add('btn-error', 'btn-xs', 'btn-circle', 'm-1', 'text-white', 'removeBtn');
        removeBtn.textContent = "X";

}

Book.prototype.removeBook = function() {
    console.log(`Book ID${bookID} removed`);
}


form.onsubmit = function(e) {
    e.preventDefault(); // prevent the form from submitting
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked; // will return a boolean

    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    form.reset();
    return displayBooks(myLibrary);
}

// create a default object and add it to the library array

const theVirginSuicides = new Book (
    "The Virgin Suicides",
    "Jeffrey Eugenides",
    248,
    true,
);

myLibrary.push(theVirginSuicides);


// display card for each item in array
// FIRST remove everything, then display everything again LAST
function displayBooks(array) {
    container.innerHTML = ""; // remove everything 
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

        // create the read toggle ...
        let bookRead = document.createElement('div');
        bookRead.classList.add('form-control', 'm-1', 'p-1');
        // cannot use innerHTML - need to access toggle so we can switch it on and off 
        // we can create the label with some existing template literal then append the toggle under it
        let bookReadLabel = document.createElement('label');
        bookReadLabel.classList.add('label', 'cursor-pointer');
        bookReadLabel.setAttribute('for', 'read');
        // add the span for the label text inside the label tag
        bookReadLabel.innerHTML = `
        <span class="label-text p-2 text-accent">Read:</span>
        `;
            // how to change read/unread colour - create the span in a variable & use an if statement to determine colour

            // ** we are skipping the div that holds the toggle here **
        // create the toggle
        let readToggleByBook = document.createElement('input');
        // add the classes to the input tag
        readToggleByBook.classList.add('toggle', 'toggle-lg', 'toggle-accent');
        // add the input type as checkbox
        readToggleByBook.setAttribute('type', 'checkbox');
        // we can set the input's id to a number per book in array
        readToggleByBook.setAttribute(`id`, `readToggle${i+1}`);
        // if toggle checked is true, set the book's newly created toggle to checked as well
        array[i].read ? readToggleByBook.checked = true : readToggleByBook.checked = false;
        // append the input to the label 
        bookReadLabel.appendChild(readToggleByBook);
        bookRead.appendChild(bookReadLabel);
        
        // ... append the read toggle to the card display
        cardBody.appendChild(bookRead);

        // append remove btn
        
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('btn-error', 'btn-xs', 'btn-circle', 'm-1', 'text-white', 'removeBtn');
        removeBtn.textContent = "X";
        removeBtn.setAttribute(`id`, `removeBtn${i+1}`);
        removeBtn.addEventListener('click', removeBook);
        cardBody.appendChild(removeBtn);
    }

    console.log(myLibrary);
}

displayBooks(myLibrary);

