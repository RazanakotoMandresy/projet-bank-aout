import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeNotLoged from "./pages/NotLoged/home/HomeNotLoged";
import Info from "./pages/NotLoged/Info/Info";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeNotLoged />} />
        <Route path="/info" element={<Info/>}/>
      </Routes>
    </div>
  );
}

export default App;
