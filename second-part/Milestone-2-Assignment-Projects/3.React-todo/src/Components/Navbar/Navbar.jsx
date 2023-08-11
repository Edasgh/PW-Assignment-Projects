import React from 'react'
import "./Navbar.css"
import AddTaskBtn from '../Elements/AddTaskBtn/AddTaskBtn'



const Navbar = () => {
  return (
   <>
   <nav className="navbar">
    <ul className="nav-ul" type="none">
      <h2><a href="/">myTodos</a></h2>
      <li><a href="/">Home</a></li>
      <li><a href="/todos">Todos</a></li>
      
    </ul>
    <ul className="other-ul">

   <AddTaskBtn btnCls="add-task" />

   {/* <i className="fa-solid fa-bars"></i> */}
    </ul>
   {/* <i className="fa-regular fa-square-caret-down"></i> */}

   </nav>
   {/* <AddTodoModal/> */}
     {/* class names will be used as props in add-todo component */}
   </>
  )
}

export default Navbar