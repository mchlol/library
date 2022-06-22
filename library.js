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

class Book {
    constructor(title,authorLast,authorFirst,pages,read) {
        this.title = title;
        this.authorLast = authorLast;
        this.authorFirst = authorFirst;
        this.pages = pages;
        this.read = read;
        this.bookID = bookID++; 
    }
    bookRead() {
        let indexOfThis = myLibrary.indexOf(this);
        myLibrary[indexOfThis].read = !this.read;
    }

    createToggle(parent) {
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

    removeBook() {
        let indexOfThis = myLibrary.indexOf(this);
        myLibrary.splice(indexOfThis,1);
        return displayBooks(myLibrary);
    }

    createButton(parent) {
        let removeBtn = document.createElement('button');
        removeBtn.classList.add('indicator-item', 'btn-error', 'btn-xs', 'btn-circle', 'm-1', 'text-white', 'removeBtn');
        removeBtn.textContent = "X";
        removeBtn.addEventListener('click', this.removeBook.bind(this), false);
            // removeBtn.addEventListener('onclick', this.removeBook.bind(this));
            parent.appendChild(removeBtn);
    }
}



// GET DATA FROM THE FORM
form.onsubmit = function(e) {
    e.preventDefault();
    title = document.querySelector('#title').value;
    authorLast = document.querySelector('#authorLast').value;
    authorFirst = document.querySelector('#authorFirst').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked;

    let newBook = new Book(title,authorLast,authorFirst,pages,read);
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
        cardWrap.style.minHeight = "190px";
        
        // button as sibling to cardBody - to create indicator element
        array[i].createButton(cardWrap);
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('text-center', 'm-w-xs', 'flex', 'min-h-full', 'flex-col', 'justify-between'); 
        cardBody.setAttribute('id', 'card-body');
        container.appendChild(cardWrap);
        cardWrap.appendChild(cardBody);

        let bookInfo = document.createElement('div');
        bookInfo.setAttribute('id', 'book-info');
        bookInfo.classList.add('flex', 'min-h-full', 'flex-col', 'justify-between');

        // append title
        let bookTitle = document.createElement('p');
        bookTitle.classList.add('font-bold', 'text-primary');
        bookTitle.style.maxWidth = "25ch";
        bookTitle.style.margin = "0 auto";
        bookTitle.textContent = `${array[i].title}`;
        bookInfo.appendChild(bookTitle);

        // append author
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = `by ${array[i].authorFirst} ${array[i].authorLast}`;
        bookInfo.appendChild(bookAuthor);

        // append pages
        if(array[i].pages) {
        let bookPages = document.createElement('p');
        bookPages.textContent = `${array[i].pages} pages`;
        bookInfo.appendChild(bookPages);
        } else {
            console.log('no page count entered');
        }

        cardBody.appendChild(bookInfo);

        // append the read toggle and remove button
        array[i].createToggle(cardBody);
    }
}

// create some objects and add them to the library array
const deepWork = new Book("Deep Work: Rules for Focused Success in a Distracted World", "Newport","Cal", 296, true);
const theVirginSuicides = new Book ("The Virgin Suicides","Eugenides","Jeffrey",248,true);
const eastOfEden = new Book("East of Eden","Steinbeck","John",601,false);
const felafel = new Book("He Died with a Felafel in His Hand","Birmingham","John",229,false);
myLibrary.push(deepWork, theVirginSuicides, eastOfEden,felafel);


// CALL THE DISPLAY FUNCTION ON PAGE LOAD
displayBooks(myLibrary);

// SORT 
function sortBooks(sortOrder) {
    if (sortOrder === "sort-title") {
        myLibrary.sort((a, b) => (a.title > b.title) ? 1 : -1);
    } else if (sortOrder === "sort-author") {
        myLibrary.sort((a, b) => (a.author > b.author) ? 1 : -1);
        // sorts by author first name only!
    } else if (sortOrder === "sort-id") {
        myLibrary.sort((a, b) => (a.bookID > b.bookID) ? 1 : -1);
    } else if (sortOrder === "sort-pages") {
        myLibrary.sort((a, b) => (a.pages > b.pages) ? 1 : -1);
    }
    return displayBooks(myLibrary);
}

// FILTER