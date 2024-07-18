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
    if (nonNilToken != "") {
      setConnected(false);
    }
  };
  useEffect(() => {
    IsConnected();
  }, []);
  return (
    <div>
      <Routes>
        {connected ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<HomeAdmin />} />
        )}

        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
