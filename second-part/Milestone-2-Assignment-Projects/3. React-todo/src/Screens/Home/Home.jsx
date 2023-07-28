import React from 'react'
import Todos from '../Todos/Todos'
import AddTodo from "../../Components/AddTodo/AddTodo";

const Home = () => {
  return (
    <>
    <button>Add Todo</button>
    <AddTodo/> 
    {/* class names will be used as props in add-todo component */}
    <Todos/>
    
    
    </>
  )
}

export default Home