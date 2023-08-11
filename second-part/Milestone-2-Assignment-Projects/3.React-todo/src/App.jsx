import "./App.css";
// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Todos from "./Screens/Todos/Todos";
import Home from "./Screens/Home/Home";
import AddTodoModal from "./Components/AddTodoModal/AddTodoModal";
// import TodoState from "./Context/todos/todoState";
function App() {
  return (
    <>
      {/* <TodoState> */}
        <BrowserRouter>
          <Navbar />
          <AddTodoModal/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/todos" element={<Todos />} />
          </Routes>
        </BrowserRouter>
      {/* </TodoState> */}
    </>
  );
}

export default App;
