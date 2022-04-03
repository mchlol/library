# Library - in progress

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

- Fix duplicate book array issue - fixed: clear the container first on calling the display function, then run the rest of the display function.
- Add read toggle to book display
- Add a remove book function
- Center the library 'cards' in the container
- Create form popup modal - use a new branch for this - it's good git practice.


#### Extra resources used

- [Create object from form](https://www.sitepoint.com/community/t/create-object-from-a-form/313057/6)
- [How to save data in localStorage using JavaScript](https://dev.to/michaelburrows/how-to-save-data-in-localstorage-using-javascript-994)