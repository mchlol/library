Object constructor & prototype inheritance practice for [The Odin Project](https://www.theodinproject.com)  
[Link to lesson instructions](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library)   

### Tools

- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)  

### Steps

1. Create basic html structure
2. Create an array to take users input and store new book objects into the array
3. Write a function to loop through the array and display each book object on the page
4. Add a "new book" button that brings up a form allowing users to input the details for the new book: title, author, number of pages, and whether it has been read.
5. Add a button on each book's display to remove the book from the library  
  - You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
6. Add a button on each book's display to change its `read` status.
 - To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.  

### Pseudocode

User clicks ‘new book’ button  
Brings up a modal window with a form  
Form inputs: title author pages read  
User clicks ok - triggers a function  
The function;  
1. Creates a div element for the individual book card
2. creates a p element for each input and sets the textContent to users input
3. Creates a ‘delete book’ button (TBC)
4. Append the p element to the card
5. Append the div to the container