import { createContext, useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomeNotLoged from "./pages/NotLoged/home/HomeNotLoged";
import Info from "./pages/NotLoged/Info/Info";
import Register from "./pages/loginRegister/Register";
import Login from "./pages/loginRegister/Login";
import Home from "./pages/homeLoged/Home";
import Profile from "./pages/profile/Profile";
import "./App.css";

import { GetUser } from "./logics/AxiosLogics/AxiosLogics";
import { Authentified } from "./logics/authentification/authentification";
export const UserContext = createContext();
export const useAppContext = () => useContext(UserContext);

function App() {
  const [userData, setUserData] = useState({});
  const [connected, setConnected] = useState(false);
  const getUser = async () => {
    try {
      const { data } = await GetUser(Authentified);
      setUserData(data);
      setConnected(true);
    } catch (error) {
      console.log("vous pouvez vous conneter sur login");
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ userData }}>
        <Navbar />
        <Routes>
          {connected ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<HomeNotLoged />} />
          )}
          <Route path="/info" element={<Info />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:uuid" element={<Profile />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
