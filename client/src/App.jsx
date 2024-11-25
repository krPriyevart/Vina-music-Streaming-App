import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./routes/login.jsx";
import Home from "./routes/home.jsx";
function App() {

  return (
  
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<div>register</div>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<div>profile</div>}></Route>
      </Routes>
      </BrowserRouter>
    
  )
}

export default App
