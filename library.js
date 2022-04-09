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

// book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read;
    }

    bookRead(readStatus) {
        // when toggle is clicked update checked true/false 

    }
}

// array to hold all the book objects
let myLibrary = [];

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

// assign each book an id based on its position in the library array
function assignIDToBook(array) {
    for (let i = 0; i < array.length; i++) {
        let idNumber = i + 1; // start number from 1 instead of 0
        array[i].bookID = idNumber;
    }
};


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
        cardBody.appendChild(removeBtn);
    }
    assignIDToBook(myLibrary);
    console.log(myLibrary);
}

displayBooks(myLibrary);


function removeBook(book) {
    // remove the book object with matching bookID value from the library array
    myLibrary.pop(book);

    // display the changed library array
    displayBooks(myLibrary);
}

// call a function with the REMOVE BUTTON ID to remove the corresponding BOOK ID from the library and run the display function again

    // there can only be one element per ID. so how to check for equality? 
    // put the id number FIRST - then check the first character of each ID string value? what if it's more than one digit?
    // we need to separate the numbers from the letters
    // this means REGEX
    // values so far include: 'removeBtn${i}', 'readToggle${i}', and 'bookID${i]'} - display eg. 'removeBtn1'. we wanna read the ${i} value so how to take the element and read the leftover numbers?
    // how about checking for the presence of the element name eg 'removeBtn' and if it's in the string, remove it?
    // we dont wanna mutate the ID itself though we just want to read what is left which will be the numbers - so lets store the separate values in new variables
    // eg. elementName = 'removeBtn' & elementNo = '1';
    // the number will be stored as a string
    // so no type coercion - use loose equality instead of strict (== instead of ===)
    // element.includes('string') returns a boolean - so if this returned true we could access the id with whatever we passed into the includes() method by storing that in a variable
    // element.match('string') returns an array with whatever matches are found - we could read the array's first value and use that to  match an ID - if we want book 1, access array[${indexNo}] ?
    // element.search('string') returns an index position - could be useful for something else




// put an event listener on the book read toggle so we can update its status in the library array

// if toggle is checked, update this status in the array

