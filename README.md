# Library - in progress

[WIP viewable here](https://mchlol.github.io/library/)

Object constructor & prototype inheritance practice for [The Odin Project](https://www.theodinproject.com)  
[Link to lesson instructions](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/library)   



### Tools

- HTML
- Vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/) for Tailwind CSS


## About

The aim of this project is to create a single page library app, where a user can add information about a book and have it appear on the page.  
One objective was to have a form popup on a button click, to enter the info, but I considered it better UX to have the form at the top of the page so it's more easily accessible, and more obvious how to add books to the library. However, I am no UX expert and it does take up precious library book space, plus it would be good practice to build and style a modal.  
I used TailwindCSS for the first time on this project, it's very cool and makes things like themes and toggles a lot easier, but I do prefer to write my own CSS so I really know what's going on (plus I might forget how).  


## Notes
Tailwind is great and all but I had a lot of trouble with the DaisyUI indicator classes. I used this to put the remove button on the top corner of each book, however it wreaked havoc on the rest of my styles. I ended up rewriting the class and putting it under the material icons size classes in the head of my html. Not ideal, maybe? But it worked a treat. 💃 


### TO DO

- Fix duplicate book array issue - *fixed: clear the container first on calling the display function, then run the rest of the display function.*
- Add read toggle to book display - *fixed - new issue below*
- assign each book an id - *fixed - create a global variable and increment it on the book constructor so the id is always different and doesn't change when items are removed from the array*
- Add a remove book function - *fixed: created the button and it's corresponding function on the **constructor**, get the index of the item in the array, and remove it with splice()*
- change read status of book in library array on toggle - *fixed - created the toggle and function on the constructor - the function sets the read value to the opposite of itself on click*
- Center the library 'cards' in the container - *fixed-sort of: went through the two section classes and made sure they all matched. Haven't found a way to centre the grid children when there aren't enough to fill a row.*
- Create form popup modal
- Add a function to select & remove all selected books at once
- Add a function to sort books by read, no. of pages, or alphabetically etc. 


#### Extra resources used

- [Magic Pattern](https://www.magicpattern.design/tools/css-backgrounds)
- ["Module #11 - Prototypes, 'this', 'new' and Inheritance", from Beginner JavaScript by Wes Bos](https://beginnerjavascript.com/)
- [Create object from form](https://www.sitepoint.com/community/t/create-object-from-a-form/313057/6)
- [How to save data in localStorage using JavaScript](https://dev.to/michaelburrows/how-to-save-data-in-localstorage-using-javascript-994)
- [Creating buttons in a JavaScript constructor](https://stackoverflow.com/questions/27913537/creating-buttons-in-a-javascript-constructor)
- [Removing a specific item from an array](https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array)
- [Global ID variable idea came from this student solution by jwern](https://github.com/jwern/library-app)
- [Delete a file from git and update in remote repo](https://stackoverflow.com/a/492591/17232226) - while watching my tailwind file I typed `-o /dist/output.css` instead of `-o ./dist/output.css` - forgot the dot before the location - and it duplicated the whole css file.  
- [How to sort an array of objects by property value](https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/)