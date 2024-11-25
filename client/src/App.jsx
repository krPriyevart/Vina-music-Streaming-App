import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./routes/login.jsx";
import Register from "./routes/register.jsx";
import Home from "./routes/home.jsx";
function App() {

  return (
  
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<div>profile</div>}></Route>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
