import React from 'react'
import "./AddTaskBtn.css"
import {openOrHideModal} from "../../../hooks/OpenOrHideModal"



const AddTaskBtn = ({btnCls}) => {
const handleClick=()=>{
  openOrHideModal();
}
  return (
    <button className={`${btnCls}`} onClick={handleClick}>Add a Todo  &nbsp;<i className="fa-solid fa-square-plus plus-icon"></i></button>
  )
}

export default AddTaskBtn