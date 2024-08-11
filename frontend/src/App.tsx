import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import HomeNotLoged from "./pages/HomeNotLoged/HomeNotLoged";
import { GetUser } from "./utils/Axios/AxiosLogics";
import "./App.css";
import { UserContextType } from "./utils/types/Types";
// import { Auth } from "./utils/auth/Auth";
// creation du contexte

export const UserContext = createContext<UserContextType | null>(null);
const App: React.FC = () => {
  // pp mbola manipulerna directement avy amin'i db rehefa tss de tonga de setDefaultPP direct
  const [userData, setUserData] = useState<UserContextType>({
    AppUserName: "",
    BlockedAcc: [],
    Email: "",
    ID: 0,
    firstName: "",
    image: "",
    name: "",
    residance: "",
    money: 0,
    UUID: "",
  });

  // tsy asina images tsony fa directement manipulena depuis backend
  const [boolTest, setBoolTest] = useState<boolean>(false);
  const getUser = async () => {
    try {
      const { data } = await GetUser();
      setUserData({
        AppUserName: data.AppUserName,
        BlockedAcc: data.BlockedAcc,
        Email: data.Email,
        ID: data.ID,
        firstName: data.firstName,
        image: data.image,
        name: data.name,
        residance: data.residance,
        money: data.money,
        UUID: data.UUID,
      });
      setBoolTest(!boolTest);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<HomeNotLoged />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
