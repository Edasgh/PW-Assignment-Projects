import React, { useState } from "react";
import todoContext from "./todoContext";


const todoState = (props) => {
  const initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);

  const getAllTodos = () => {
    try {
      const stringifiedArray = localStorage.getItem("todos");
      setTodos(JSON.parse(stringifiedArray));
    } catch (err) {
      return err;
    }
  };

  const addTodo = (title, status) => {
    try {
      let todo = {
          title, 
          status 
        
        };
      setTodos(todos.push(todo));
      localStorage.setItem("todos", JSON.stringify(todos));
      window.location.reload();
    } catch (err) {
      return err;
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.splice(id, 1));
    localStorage.setItem("todos", JSON.stringify(todos));
    window.location.reload();
  };


   const editTodo=(id,title,status)=>{
    let newTodos=todos;
    //Logic to edit note in client
    for (let i = 0; i < newTodos.length; i++) {
      const element = newTodos[i];
      if (newTodos.indexOf(element) === id) {
        newTodos[i].title = title;
        newTodos[i].status = status;
        break;
      }

      setTodos(newTodos);
    }
    window.location.reload();
   }


  return (
  <>
  <todoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo , getAllTodos}}>
      {props.children}
    </todoContext.Provider>
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
  
  );
};

export default todoState;
