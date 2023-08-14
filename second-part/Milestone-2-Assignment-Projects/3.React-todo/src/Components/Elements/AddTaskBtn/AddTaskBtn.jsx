import React from 'react'
import "./AddTaskBtn.css" // stylesheet
import {openOrHideModal} from "../../../hooks/OpenOrHideModal"



const AddTaskBtn = ({btnCls}) => {
  // open or hide the modal if user clicks the add-todo button
const handleClick=()=>{
  openOrHideModal();
}
  return (
    <button className={`${btnCls}`} onClick={handleClick}>Add a Todo  &nbsp;<i className="fa-solid fa-square-plus plus-icon"></i></button>
  )
}

export default AddTaskBtn