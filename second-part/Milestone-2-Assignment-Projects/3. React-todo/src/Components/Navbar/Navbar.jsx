import React from 'react'

import AddTodo from '../AddTodo/AddTodo'


const Navbar = () => {
  return (
   <>
   
   <button>Add Todo</button>
   <AddTodo/>
     {/* class names will be used as props in add-todo component */}
   </>
  )
}

export default Navbar