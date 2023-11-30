import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Login from "./components/Login"
import Register from "./components/Register";
import Index from "./components/Index";

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/index" element={<Index/>}/>
  </Routes>
</BrowserRouter>
  );
}

export default App;
