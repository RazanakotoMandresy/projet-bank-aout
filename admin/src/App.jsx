import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import Login from "./pages/loginRegister/Login";
import Register from "./pages/loginRegister/Register";
import "./App.css";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/" element={<HomeAdmin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
