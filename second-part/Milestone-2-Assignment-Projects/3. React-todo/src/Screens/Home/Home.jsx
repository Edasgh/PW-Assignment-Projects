import React from "react";
import "./Home.css"
import Todos from "../Todos/Todos";
import AddTaskBtn from "../../Components/Elements/AddTaskBtn/AddTaskBtn";




const Home = () => {
  
  
  
  return (
    <>
       <AddTaskBtn btnCls="add-todo" />
  
      {/* class names will be used as props in add-todo component */}
      <Todos />
    </>
  );
};

export default Home;
