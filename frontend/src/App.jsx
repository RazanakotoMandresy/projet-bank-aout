import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeNotLoged from "./pages/NotLoged/home/HomeNotLoged";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeNotLoged />} />
      </Routes>
    </div>
  );
}

export default App;
