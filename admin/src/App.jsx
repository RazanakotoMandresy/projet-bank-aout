import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import Login from "./pages/loginRegister/Login";
import Register from "./pages/loginRegister/Register";
import "./App.css";
const App = () => {
  const [connected, setConnected] = useState(true);
  const IsConnected = () => {
    const nonNilToken = localStorage.getItem("token");
    if (nonNilToken == "" || nonNilToken == null) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  };
  useEffect(() => {
    IsConnected();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={connected ? <Login /> : <HomeAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
