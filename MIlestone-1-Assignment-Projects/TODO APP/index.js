// getting all the required html elements
const todoDiv=document.querySelector(".todoDiv")
const todoForm=document.getElementById("todoForm");
const todo_input=document.getElementById("todo-input");
const added_todos=document.querySelector(".added-todos")

todoForm.addEventListener("submit",(e)=>{
  // preventing the default behaviour of webpage on submitting
    e.preventDefault();
  // creating the todo element
   const todo=document.createElement("div")
   todo.classList.add("todo");
   const todoContent=document.createElement("input");
   todoContent.classList.add("todoContent")
   todoContent.type="text"
   if(todo_input.value==""){
    // interupting the content to add if the input field is empty
    alert("todo content is required")
    return;
   }else{
     todoContent.value=todo_input.value;
   }
   todoContent.setAttribute("readonly","readonly");
   todoContent.setAttribute("disabled","disabled");
   todo.appendChild(todoContent)
   const actionSpan=document.createElement("span")
   actionSpan.classList.add("actionSpan")
   const editBtn=document.createElement("span")
   editBtn.classList.add("editBtn")
   editBtn.textContent="Edit"
   const deleteBtn=document.createElement("span")
   deleteBtn.classList.add("deleteBtn")
   deleteBtn.textContent="Delete"
   actionSpan.appendChild(editBtn)
   actionSpan.appendChild(deleteBtn)
   todo.appendChild(actionSpan)
   added_todos.appendChild(todo)
   // emptying the todo input on submitting
   todo_input.value=""
//edit functionality on edit button click
   editBtn.addEventListener("click",()=>{
    if(editBtn.textContent=="Edit"){
      // if user clicks on edit show save and let them edit the content
      editBtn.textContent="Save"
      todoContent.removeAttribute("readonly");
      todoContent.removeAttribute("disabled");
      todoContent.focus();
    }else{
      editBtn.textContent="Edit"
      todoContent.setAttribute("readonly","readonly");
      todoContent.setAttribute("disabled","disabled");
    }
   })
   //delete functionality on delete button click
   deleteBtn.addEventListener("click",()=>{
    added_todos.removeChild(todo)
   })
   
})