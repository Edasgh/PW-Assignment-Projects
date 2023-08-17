import React from "react";
import "./Navbar.css"; // stylesheet
import AddTaskBtn from "../Elements/AddTaskBtn/AddTaskBtn";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-ul" type="none">
          <p className="nav-logo nav-logo-inside">
            <Link to="/">myTodos</Link>
          </p>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
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
