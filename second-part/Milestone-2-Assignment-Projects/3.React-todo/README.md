# React-todo

## Starting Command : npm run start

## Description :

- This todo application has two pages: the home page and the todos page. On the home page, users will be able to see a "add-todo" button and a list of all existing todo with their titles and status.On the todos page, users will be only able to see a list of all existing todo-items,

- User clicks the "add-todo" button(on the home-page or on the navigation bar) and the app opens a modal with a form to take input of the todo-title [input-type = text] and todo-status [input type = option (two options: "pending" and "done" ; default "pending")] from the user. After filling the form, when user submits the form [clicks the "add-todo" button] the page reloads and the user can see his/her added todo on the home-page or in the todos-page. The todo-element gets saved to the localStorage as an element of "todos" array[pushes that element to the "todos" array].

- There's a "update status" button in the todo-item to update the status of a todo-element from "pending" to "done" or, from "done" to "pending". When, the user clicks the "Update status" button in the todo-element and then a modal with a form to change the status appears on the screen. The modal contains the todo-title with its index number in "todos" array and an option input containing both the status. After changing the status, when user clicks the "Update Status" button [submits the form] the page reloads and that element gets updated in the app as well as in the "todos" array in the localStorage.

- In the todo-item there's a "Remove" button to delete a todo-element. User simply clicks the button to remove the todo from the localStorage.

- Before the title, there is a todo number indicating the index number of that todo-item.

### In the webpage :

- In the navigation bar, there are four elements : logo to navigate to the home page ("/"), home to navigate to "/", todos to navigate to "/todos" and an "add-todo" button.

- The "home" menu navigates to the "home" page where user can see an "add-todo" button and the todos section containing all the todos if any or a heading "No Items Found". The "todos" menu navigates to the "todos" page where user can only see the todos section containing todos or simply the "No Items Found" heading.

### Folder Structure :

- Inside src folder , there are another three folders : "Components", "Screens" and "hooks"

        * "Screens" folder is created for different screens or pages in the app
        and, "Components"  folder is created for different components needed in a page in this app

        * A folder named "Elements" is created inside the "Components" folder.
        "Elements" folder is created to contain different elements needed for a component.

        * "hooks" folder is created to use custom functions as a hook for different components and pages or screens

- The "Components" folder contains another three folders : "Navbar", "AddTodoModal" and "Elements"(mentioned above).

        * The "Navbar" folder contains two files "Navbar.jsx"(contains the main code of "Navbar" component [the navigation bar of the app]) and "Navbar.css"(contains the stylesheet for the "Navbar" component),

        * And, the "AddTodoModal" folder contains two files "AddTodoModal.jsx"(contains the main code of "AddTodoModal" component [the modal to be opened if user clicks add-todo button,this modal contains a form with two input fields : todo-title (text input) and todo-status(option input) and a submit button]) and "AddTodoModal.css"(contains the stylesheet for the "AddTodoModal" component),

        * The "Elements" folder contains a folder "AddTaskBtn" (AddTodo button) which contains two files "AddTaskBtn.jsx"[contains the main code of the add-todo button and customised by  class-names in case of navigation bar and the home-page] and, "AddTaskBtn.css"[contains the css code of the "AddTaskBtn" element]

- The "Screens" folder contains another two folders :"Home" and "Todos"

        * The "Home" folder contains one file : "Home.jsx"[contains the code of the home-page where the add-todo button and another screen todos is present]

        * The "Todos" folder contains two files: "Todos.jsx"[contains the code of the todos page containing all the todo-elements and the update-todo modal] and "Todos.css"[contains the css code which applies to each todo-element and the update-todo-modal]

- The "hooks" folder contains two files :"localStorage.js"[contains the functions to get, add, update and delete todo elements from the app as well as from the localStorage] and "OpenOrHideModal.js" [contains the functions to open or hide (if opened then hides and if hidden then opens the modal) the add-todo modal and the update-todo-modal]

# This project is created with React + Vite
