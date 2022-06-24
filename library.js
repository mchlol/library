let myLibrary = [];

const container = document.querySelector('.container');
const form = document.querySelector('form');
const addBtn = document.querySelector('#add-button')

let inputTitle = document.querySelector('#title');
let inputAuthorLast = document.querySelector('#authorLast');
let inputAuthorFirst = document.querySelector('#authorFirst');
let inputPages = document.querySelector('#pages');
let inputRead = document.querySelector('#read');

let bookID = 0; 

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
            parent.appendChild(removeBtn);
    }
}

const addNewBookForm = document.querySelector('#addNewBookForm');
addNewBookForm.onsubmit = function(e) {
    e.preventDefault();
    title = inputTitle.value;
    authorLast = inputAuthorLast.value;
    authorFirst = inputAuthorFirst.value;
    pages = inputPages.value;
    read = inputRead.checked;

    let newBook = new Book(title,authorLast,authorFirst,pages,read);
    myLibrary.unshift(newBook);
    form.reset();
    return displayBooks(myLibrary);
}


function displayBooks(array) {
    container.innerHTML = ""; 
    for (let i = 0; i < array.length; i++) {
        let cardWrap = document.createElement('div');
        cardWrap.classList.add('indicator', 'rounded-xl', 'm-w-sm', 'bg-base-100', 'shadow-xl', 'm-4', 'p-4', 'w-auto', 'block');
        cardWrap.style.minHeight = "190px";
        
        array[i].createButton(cardWrap);
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('text-center', 'm-w-xs', 'flex', 'min-h-full', 'flex-col', 'justify-between'); 
        cardBody.setAttribute('id', 'card-body');
        container.appendChild(cardWrap);
        cardWrap.appendChild(cardBody);

        let bookInfo = document.createElement('div');
        bookInfo.setAttribute('id', 'book-info');
        bookInfo.classList.add('flex', 'min-h-full', 'flex-col', 'justify-between');

        let bookTitle = document.createElement('p');
        bookTitle.classList.add('font-bold', 'text-primary');
        bookTitle.style.maxWidth = "25ch";
        bookTitle.style.margin = "0 auto";
        bookTitle.textContent = `${array[i].title}`;
        bookInfo.appendChild(bookTitle);

        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = `by ${array[i].authorFirst} ${array[i].authorLast}`;
        bookInfo.appendChild(bookAuthor);

        if(array[i].pages) {
        let bookPages = document.createElement('p');
        bookPages.textContent = `${array[i].pages} pages`;
        bookInfo.appendChild(bookPages);
        } else {
            console.log('no page count entered');
        }

        cardBody.appendChild(bookInfo);

        array[i].createToggle(cardBody);
    }
}

const deepWork = new Book("Deep Work: Rules for Focused Success in a Distracted World", "Newport","Cal", 296, true);
const theVirginSuicides = new Book ("The Virgin Suicides","Eugenides","Jeffrey",248,true);
const eastOfEden = new Book("East of Eden","Steinbeck","John",601,false);
const felafel = new Book("He Died with a Felafel in His Hand","Birmingham","John",229,false);
myLibrary.push(deepWork, theVirginSuicides, eastOfEden,felafel);

displayBooks(myLibrary);



const sortForm = document.querySelector('#sortForm');
sortForm.onsubmit = function(e) {
    e.preventDefault();

    // get the radio button value and assign it to a variable
    let sortMethod = sortForm.value;
    sortBy(sortMethod);
    return displayBooks(myLibrary);
}

function sortBy(sortMethod) {
    myLibrary.sort((a,b) => (a.sortMethod > b.sortMethod) ? 1 : -1);
}