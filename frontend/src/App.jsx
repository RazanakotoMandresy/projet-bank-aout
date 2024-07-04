import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeNotLoged from "./pages/NotLoged/home/HomeNotLoged";
import Info from "./pages/NotLoged/Info/Info";
import Register from "./pages/loginRegister/Register";
import Login from "./pages/loginRegister/Login";
import Home from "./pages/homeLoged/Home";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeNotLoged />} />
        <Route path="/info" element={<Info />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
