import React, { useState } from "react";
import "./Todos.css";
import { loadTodos, removeTodo } from "../../hooks/localStorage";



const Todos = () => {
  const todoItems = loadTodos() || [];

 
 

  return (
    <div className="todos">
      {todoItems.length !== 0 ? (
        todoItems.map((item, index) => (
          <div className="todo" key={item.title}>
            <p className="title">
              <span className="index">{index + 1}. </span>
              {item.title}
            </p>
            <p className="status">
              Status : { "  "}
              <span className={`statVal ${item.status}`}>{item.status}</span>
            </p>
            <button
              id="update-status"
              onClick={() => {
              console.log(item)
              
               
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
  );
};

export default Todos;
