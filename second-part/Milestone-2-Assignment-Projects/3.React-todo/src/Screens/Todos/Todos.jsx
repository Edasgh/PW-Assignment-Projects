import React, { useState } from "react";
import "./Todos.css";
import { editTodo, loadTodos, removeTodo } from "../../hooks/localStorage";

import { openOrHideEditModal} from "../../hooks/OpenOrHideModal";


const Todos = () => {
  const todoItems = loadTodos() || [];

  // getting id , title and status to update todo-status
  const [todoId, setTodoId]=useState(undefined);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoStatus, setTodoStatus]=useState("Pending");
  // setting the classname of status span to status-value
  const [classNm, setClassNm] = useState(todoStatus);

  //function to edit the todo-item
  const handleSubmit = (e) => {
    e.preventDefault();
   editTodo(todoId,todoTitle,todoStatus);
    openOrHideEditModal();
  };


  return (
    <>
    <div className="edit-modal">
        <form
          className="edit-modal-form"
          id="edit-todo"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
         

          <span className="Todotitle"> {todoId+1}.  {todoTitle} </span> &nbsp;
        
          <label htmlFor="status">Edit Status :</label>
          <select
            name="status"
            id="status"
            value={todoStatus}
            className={`${classNm}`}
            onChange={(e) => {
              setTodoStatus( e.target.value);
              setClassNm(e.target.value.toString());
            }}
          >
            <option value="Pending" className="Pending">
              Pending
            </option>
            <option value="Done" className="Done">
              Done
            </option>
          </select>
          <button type="submit">Update Status</button>
        </form>
        <i
          className="fa-solid fa-xmark cross-icon"
          onClick={openOrHideEditModal}
        ></i>
      
      </div>


      <div className="todos">

        {todoItems.length !== 0 ? (
          todoItems.map((item, index) => (
            <div className="todo" key={index}>
              <p className="title">
                <span className="index">{index + 1}. </span>
                {item.title}
              </p>
              <p className="status">
                Status : &nbsp;
                <span className={`statVal ${item.status}`}>{item.status}</span>
              </p>
              <button
                id="update-status"
                onClick={() => { 
                  setTodoTitle(item.title);
                  setTodoStatus(item.status);
                  setClassNm(item.status);
                  setTodoId(index);
                openOrHideEditModal();

                }}
              >
                Update Status
              </button>
              <button
                id="delete"
                onClick={() => {
                  removeTodo(index);
                }}
              >
                Remove
              </button>
              
            </div>
          ))
        ) : (
          <h1>No Items Found</h1>
        )}
      </div>
    </>
  );
};

export default Todos;
