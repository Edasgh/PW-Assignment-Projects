import React, { useState } from "react";

import "./AddTodoModal.css"; // stylesheet
import {openOrHideModal} from "../../hooks/OpenOrHideModal"
import { saveTodo } from "../../hooks/localStorage";


const AddTodo = () => {

// setting className of the status as per user input
  const [classNm, setClassNm] = useState("Pending");

  //initial state of todo input fields when user didn't give any input
  const [todoItem, setTodoItem] = useState({
    title: "",
    status:"Pending",
  });
  
  // function to add a todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    console.log(todoItem);
    saveTodo(todoItem);
    setTodoItem({ title: "", status: "Pending" });
    openOrHideModal();
  };

  return (
    <>
      <div className="modal" >
        <form
          className="modal-form"
          id="add-todo"
          onSubmit={(e) => {
            handleAddTodo(e);
          }}
        >
          <label htmlFor="title">Add Todo Title : </label>
          <input
            type="text"
            id="title"
            value={todoItem.title}
            placeholder="Write a todo"
            onChange={(e) => {
              setTodoItem({ ...todoItem, title: e.target.value });
            }}
            required
          />
          <label htmlFor="status">Add Status :</label>
          <select
            name="status"
            id="status"
            value={todoItem.status}
            className={`${classNm}`}
            onChange={(e) => {
              setClassNm(e.target.value.toString());
              setTodoItem({ ...todoItem, status: e.target.value });
            }}
          >
            <option value="Pending" className="Pending">
              Pending
            </option>
            <option value="Done" className="Done">
              Done
            </option>
          </select>
          <button type="submit" id="addTodo">Add Todo</button>
        </form>
        <i
          className="fa-solid fa-xmark cross-icon"
          onClick={openOrHideModal}
        ></i>
      </div>
    </>
  );
};

export default AddTodo;
