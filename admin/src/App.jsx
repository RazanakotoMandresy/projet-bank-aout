import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import Login from "./pages/loginRegister/Login";
import Register from "./pages/loginRegister/Register";
import "./App.css";
import Header from "./components/header/Header";
import { GetAdminInfo } from "./utils/axiosUtils/AxiosLogics";
import { Authentified } from "./utils/auth/Auth";
// TODO dark mode (install styled components (Maybe))
const App = () => {
  const [Mode, setMode] = useState(Boolean);
  const [connected, setConnected] = useState(null);
  const [logedBool, setLogedBool] = useState(false);
  const changeMode = () => {
    localStorage.setItem("Mode", Mode);
    setMode(!Mode);
  };
  // TODO later bcz i'll only fix the UI tonnight
  // try to get the admin who are connected if err , rm
  const getLogedAdmin = async () => {
    try {
      const { data } = await GetAdminInfo(Authentified);
      setConnected(data.res);
      setLogedBool(true);
    } catch (e) {
      setConnected(null);
      setLogedBool(false);
    }
  };
  const changeLog = () => {
    setLogedBool(!logedBool);
  };
  // if there is no connected user , auto on login
  useEffect(() => {
    getLogedAdmin();
  }, []);
  const headerProps = { changeMode, Mode, connected, logedBool, changeLog };
  if (connected == null) {
      return <Login/>
  }
  return (
    <div>
      <Header props={headerProps} />
      <Routes>
        <Route path="/" element={<HomeAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
export default App;
