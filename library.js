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

// book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read;
    }

    bookRead(readStatus) {
       // set the read toggle to on if true
    //    readStatus ? toggleOn(): toggleOff();
    }
}

// array to hold all the objects
let myLibrary = [];

form.onsubmit = function(e) {
    e.preventDefault();
    title = document.querySelector('#title').value;
    author = document.querySelector('#author').value;
    pages = document.querySelector('#pages').value;
    read = document.querySelector('#read').checked;

    let newBook = new Book(title,author,pages,read);
    console.log(newBook);
    myLibrary.push(newBook);
    form.reset();
    return displayBooks(myLibrary);
}

// test default object

const theVirginSuicides = new Book (
    "The Virgin Suicides",
    "Jeffrey Eugenides",
    248,
    true,
);

myLibrary.push(theVirginSuicides);


// display card for each item in array
// remove everything and display it anew

function displayBooks(array) {
    container.innerHTML = "";
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

        // append read ### NEW CODE ###

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
        // note we cannot affect the colour without creating the span in a variable

        // ** we are skipping the div that holds the toggle here **
        // create the toggle
        let readToggleByBook = document.createElement('input');
        // add the classes to the input tag
        readToggleByBook.classList.add('toggle', 'toggle-lg', 'toggle-accent');
        // add the input type as checkbox
        readToggleByBook.setAttribute('type', 'checkbox');
        // we can set the input's id to a number per book in array
        readToggleByBook.setAttribute(`id`, `book${i}`);
        // if toggle checked is true, set the book's newly created toggle to checked
        array[i].read ? readToggleByBook.checked = true : readToggleByBook.checked = false;
        // append the input to the label 
        bookReadLabel.appendChild(readToggleByBook);
        bookRead.appendChild(bookReadLabel);
        


        // ### old code ### 
        // if (array[i].read) { // if true display in accent colour
        // bookRead.textContent = "Read";
        // bookRead.classList.add('text-accent');
        // } else { // if false display in grey
        // bookRead.textContent = "Unread";
        // bookRead.classList.add('text-gray-400')
        // }

        /* ### html template literal ###
`<div class="form-control m-1 p-1">
                        <label class="label cursor-pointer" for="read">
                            <span class="label-text p-2 text-accent">Read:</span>
                            <div>
                                <input class="toggle toggle-lg toggle-accent" type="checkbox" id="IDread"
                                    name="bookID_read">
                            </div>
                        </label>
                    </div>`
        */
        
        cardBody.appendChild(bookRead);
    }
}

displayBooks(myLibrary);

function removeBook(id) {
    // assign each book an id and access this to remove it from the DOM
}