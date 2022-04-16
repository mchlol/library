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
One objective was to have a form popup on a button click, to enter the info, but I considered it better UX to have the form at the top of the page so it's more easily accessible, and more obvious how to add books to the library. *I should probably do it the way you're supposed to though.*  
I used TailwindCSS for the first time on this project, it's very cool and makes things like themes and toggles a lot easier, but I do prefer to write my own CSS - it's way more fun.  


### TO DO

- Fix duplicate book array issue - *fixed: clear the container first on calling the display function, then run the rest of the display function.*
- Add read toggle to book display - *fixed - new issue below*
- assign each book an id - *fixed - create a global variable and increment it on the book constructor so the id is always different and doesn't change when items are removed from the array*
- Add a remove book function - *fixed: created the button and it's corresponding function on the **constructor**, get the index of the item in the array, and remove it with splice()*
- change read status of book in library array on toggle - *fixed - created the toggle and function on the constructor - the function sets the read value to the opposite of itself on click*
- Add a function to select & remove all selected books at once
- Center the library 'cards' in the container
- Create form popup modal


#### Extra resources used

- ["Module #11 - Prototypes, 'this', 'new' and Inheritance", from Beginner JavaScript by Wes Bos](https://beginnerjavascript.com/)
- [Create object from form](https://www.sitepoint.com/community/t/create-object-from-a-form/313057/6)
- [How to save data in localStorage using JavaScript](https://dev.to/michaelburrows/how-to-save-data-in-localstorage-using-javascript-994)
- [Creating buttons in a JavaScript constructor](https://stackoverflow.com/questions/27913537/creating-buttons-in-a-javascript-constructor)
- [Removing a specific item from an array](https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array)
- [Global ID variable idea came from this student solution by jwern](https://github.com/jwern/library-app)
- [Delete a file from git and update in remote repo](https://stackoverflow.com/a/492591/17232226) - while watching my tailwind file I typed `-o /dist/output.css` instead of `-o ./dist/output.css` - forgot the dot before the location - and it duplicated the whole css file.  