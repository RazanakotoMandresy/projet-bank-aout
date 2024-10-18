import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomeNotLoged from "./pages/page_not_logged/home/HomeNotLoged";
import Info from "./pages/page_not_logged/Info/Info";
import Register from "./pages/login_register/Register";
import Login from "./pages/login_register/Login";
import Home from "./pages/home_logged/Home";
import Profile from "./pages/profile/Profile";
import "./App.css";
import { GetUser } from "./logics/axios_logic/AxiosLogics";
import { Authentified } from "./logics/authentification/authentification";
import Setting from "./pages/Setting/Setting";
import Fonctionnalitees from "./pages/page_not_logged/Fonctionnalites/Fonctionnalitees";
import Contactes from "./pages/page_not_logged/Contactes/Contactes";
import GetSingleUser from "./pages/get_user/GetSingleUser";
import SearchResult from "./pages/search_result/SearchResult";

export const UserContext = createContext();
export const useAppContext = () => useContext(UserContext);

function App() {
  const [userData, setUserData] = useState({});
  const [connected, setConnected] = useState(false);
  const query = new URLSearchParams(location.search).get("c");

  const getUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
      const { data } = await GetUser(Authentified);
      setUserData(data);
      setConnected(true);
    } catch (error) {
      console.log("vous pouvez vous conneter sur login");
    }
  }
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
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
