import React from "react";
import Todos from "../Todos/Todos";
import AddTaskBtn from "../../Components/Elements/AddTaskBtn/AddTaskBtn";




const Home = () => {
  
  
  
  return (
    <>
       <AddTaskBtn btnCls="add-todo" />
  
      <Todos />
    </>
  );
};

export default Home;
