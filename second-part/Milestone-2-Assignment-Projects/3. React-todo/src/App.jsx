import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Todos from "./Screens/Todos/Todos"
import Home from "./Screens/Home/Home"
// import AddTodo from "./Components/AddTodo/AddTodo"

const App=() =>{
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>

     {/* <AddTodo/> */}
     {/* plan to add a modal opener prop here */}
     <Routes>
      <Route exact path="/" element={<Home/>}  />
      <Route exact path="/todos" element={<Todos/>} />
     </Routes>
     
     </BrowserRouter>
        
    </>
  )
}

export default App
