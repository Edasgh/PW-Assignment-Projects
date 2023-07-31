import React from "react";
import "./AddTodoModal.css";

const AddTodo = () => {
  return (
    <div className="modal">
      <form className="modal-form">
        <label htmlFor="title">Add Todo Title : </label>
        <input type="text" id="title" placeholder="Write a todo" required />
        <label htmlFor="status">Add Status :</label>
        <select name="status" id="status" defaultValue={"Pending"} className="Pending">
          <option value="Pending" className="Pending">Pending</option>
          <option value="Done" className="Done">Done</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
      <i className="fa-solid fa-xmark cross-icon"></i>
    </div>
  );
};

export default AddTodo;
