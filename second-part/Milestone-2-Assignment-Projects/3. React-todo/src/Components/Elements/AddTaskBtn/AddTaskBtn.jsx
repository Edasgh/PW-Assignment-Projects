import React from 'react'
import "./AddTaskBtn.css"
import openOrHideModal from '../../../hooks/openOrHideModal'



const AddTaskBtn = ({btnCls}) => {

  return (
    <button className={`${btnCls}`} onClick={openOrHideModal}>Add a Task  &nbsp;<i className="fa-solid fa-square-plus plus-icon"></i></button>
  )
}

export default AddTaskBtn