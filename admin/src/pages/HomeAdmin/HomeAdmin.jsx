import "./HomeAdmin.css";
import { Link } from "react-router-dom";
import { FiCreditCard, FiPlusCircle } from "react-icons/fi";
import DepList from "./DepList/DepList";
const HomeAdmin = () => {
  return (
    <div className="HomeAdmin">
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
