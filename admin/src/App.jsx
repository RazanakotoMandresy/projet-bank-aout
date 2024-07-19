import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import Login from "./pages/loginRegister/Login";
import Register from "./pages/loginRegister/Register";
import "./App.css";
import Header from "./components/header/Header";

const App = () => {
  const [connected, setConnected] = useState(true);
  const [Mode, setMode] = useState(false);
  const IsConnected = () => {
    const nonNilToken = localStorage.getItem("token");
    if (nonNilToken == "" || nonNilToken == null) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  };
  const changeMode = () => {
    setMode(!Mode);
  };
  const headerProps = { changeMode, Mode };
  useEffect(() => {
    IsConnected();  
  }, []);

  return (
    <div className={`${Mode ? "sombre" : "claire"}`}>
      <Header props={headerProps} />
      <Routes>
        <Route path="/" element={connected ? <Login /> : <HomeAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
