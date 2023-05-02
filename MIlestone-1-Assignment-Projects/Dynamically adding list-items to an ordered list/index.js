//getting all required html elements
const addBtn=document.querySelector(".add");
const orderedList=document.querySelector(".list-container");
// data array
const data=[
"HTML and Semantics",
"Starting with CSS",
"Working Template",
"Mobile responsive webpages",
"Grid and Flex-box in CSS",
"Projects using HTML & CSS",
"Version Control and Git",
"Getting Started with JavaScript",
"Advance JavaScript",
"Working with DOM",
"Making Projects using HTML, CSS and JavaScript",
"Understanding Fundamental of Computer Science",
"Getting Started with Database",
"Understanding the Database",
"Starting with NodeJS and Express",
"Understanding React and its Fundamentals",
"Understanding Hooks and Routers",
"Starting and Completing Full Fledge Projects"
]

// adding list-item on button click
addBtn.addEventListener("click",()=>{
    // creating an array from all the list elements inside the ordered list
    const items=Array.from(orderedList.children)
    // create a list-element per button click
 const list=document.createElement("li");
 if(items.length > data.length-1){
    // when no item is left on data array
    alert("All items have been added")
    return
 }else{
    // per first click add first item of data array
     list.innerHTML=data[(items.length)]

 }
 //adding list elements to the ordered list
 orderedList.appendChild(list);
})
