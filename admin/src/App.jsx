import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import Login from "./pages/loginRegister/Login";
import Register from "./pages/loginRegister/Register";
import "./App.css";
import Header from "./components/header/Header";
import HomeNotLoged from "./pages/HomeNotLoged/HomeNotLoged";
// TODO dark mode (install styled components (Maybe))
const App = () => {
  const [connected, setConnected] = useState(true);
  const [Mode, setMode] = useState(Boolean);
  const IsConnected = () => {
    const nonNilToken = localStorage.getItem("token");
    if (nonNilToken == "" || nonNilToken == null) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  };
  const changeMode = () => {
    localStorage.setItem("Mode", Mode);
    setMode(!Mode);
  };
  const headerProps = { changeMode, Mode, connected };
  useEffect(() => {
    IsConnected();
  }, []);

  return (
    <div>
      <Header props={headerProps} />
      <Routes>
        <Route
          path="/"
          element={connected ? <HomeNotLoged /> : <HomeAdmin />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
