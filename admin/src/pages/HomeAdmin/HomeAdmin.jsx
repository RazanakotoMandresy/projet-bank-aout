import "./HomeAdmin.css";
import { FiPlusCircle } from "react-icons/fi";
import DepList from "./DepList/DepList";
const HomeAdmin = () => {
  return (
    <div className="HomeAdmin">
      <div className="AdminProfile">
        <img src="carte-credit.png" alt="" />
        <h2>name as admin</h2>
        <h3>nombre de dep cre 20</h3>
      </div>
      <button className="createBank">
        Cree un point de retrait et deppot ?
        <label>
          <FiPlusCircle />
        </label>
      </button>
      <DepList />
    </div>
  );
};

export default HomeAdmin;
