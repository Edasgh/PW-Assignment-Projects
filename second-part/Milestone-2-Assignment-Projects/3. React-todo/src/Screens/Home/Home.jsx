import React from "react";
import "./Home.css"
import Todos from "../Todos/Todos";
import AddTodoModal from "../../Components/AddTodoModal/AddTodoModal";

const Home = () => {
  return (
    <>
      <button className="add-todo">
        Add a Task &nbsp; <i className="fa-solid fa-square-plus plus-icon"></i>
      </button>
      <AddTodoModal />
      {/* class names will be used as props in add-todo component */}
      <Todos />
    </>
  );
};

export default Home;
