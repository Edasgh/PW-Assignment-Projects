import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Todos from "./Screens/Todos/Todos";
import Home from "./Screens/Home/Home";
import AddTodoModal from "./Components/AddTodoModal/AddTodoModal";

const App=()=> {
  return (
    <>
  
        <BrowserRouter>
          <Navbar />
          <AddTodoModal/>
          <Routes>
            <Route  path="/" element={<Home />}></Route>
            <Route  path="/index.html" element={<Home />}></Route>
            <Route exact path="/todos" element={<Todos />}></Route>
          </Routes>
        </BrowserRouter>
   
    </>
  );
}

export default App;
