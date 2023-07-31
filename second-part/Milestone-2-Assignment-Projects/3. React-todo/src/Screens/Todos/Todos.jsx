import React from "react";
import "./Todos.css";

const Todos = () => {
  return (
    <>
      <div className="todo">
        <p className="title">
         
          <span className="index">1.</span> Learn useRef
        </p>
        <p className="status">
          Status : <span className="statVal Done">Done</span>
        </p>
        <button id="update-status">Update Status</button>
        <button id="delete">Remove</button>
      </div>
    </>
  );
};

export default Todos;
