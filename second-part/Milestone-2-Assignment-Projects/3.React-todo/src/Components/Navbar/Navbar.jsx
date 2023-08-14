import React from "react";
import "./Navbar.css";
import AddTaskBtn from "../Elements/AddTaskBtn/AddTaskBtn";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-ul" type="none">
          <p className="nav-logo nav-logo-inside">
            <a href="/">myTodos</a>
          </p>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/todos">Todos</a>
          </li>
        </ul>
        <ul className="other-ul">
          <AddTaskBtn btnCls="add-task" />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
