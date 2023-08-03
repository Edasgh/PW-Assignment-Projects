import React from 'react'
import "./UpdateTodoModal.css"
import AddTodo from '../AddTodoModal/AddTodoModal'


const UpdateTodoModal = ({title, status}) => {
  return (
    <>
    <AddTodo title={title} status={status} isEdit={true} />
    
    
    </>
  )
}

export default UpdateTodoModal