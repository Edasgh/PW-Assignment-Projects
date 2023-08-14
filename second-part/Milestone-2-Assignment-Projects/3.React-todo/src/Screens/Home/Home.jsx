import React from "react";
import Todos from "../Todos/Todos";
import AddTaskBtn from "../../Components/Elements/AddTaskBtn/AddTaskBtn";




const Home = () => {
  
  
  
  return (
    <>
    {/* AddTodo button */}
       <AddTaskBtn btnCls="add-todo" />
  {/* Todos component or screen */}
      <Todos />
    </>
  );
};

export default Home;
