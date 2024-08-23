import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
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
import Setting from "./pages/Setting/Setting";
import Fonctionnalitees from "./pages/NotLoged/Fonctionnalites/Fonctionnalitees";
import Contactes from "./pages/NotLoged/Contactes/Contactes";
import GetSingleUser from "./pages/GetUser/GetSingleUser";
import SearchResult from "./pages/SearchResult/SearchResult";
import MessageTest from "./pages/messageTest/MessageTest";
export const UserContext = createContext();
export const useAppContext = () => useContext(UserContext);

function App() {
  const [userData, setUserData] = useState({});
  const [connected, setConnected] = useState(false);

  const getUser = useCallback(async () => {
    try {
      const { data } = await GetUser(Authentified);
      setUserData(data);
      setConnected(true);
    } catch (error) {
      console.log("vous pouvez vous conneter sur login");
    }
  }, [connected]);
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div>
      <UserContext.Provider value={{ userData }}>
        <Navbar connected={connected} />
        <Routes>
          {connected ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<HomeNotLoged />} />
          )}
          <Route path="/info" element={<Info />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/func" element={<Fonctionnalitees />} />
          <Route path="/contactes" element={<Contactes />} />
          <Route path="/usr/:uuid" element={<GetSingleUser />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="test" element={<MessageTest />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
