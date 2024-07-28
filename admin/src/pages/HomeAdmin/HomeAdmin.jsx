import { FiPlusCircle } from "react-icons/fi";
import DepList from "./DepList/DepList";
import { useState } from "react";
import CreateBank from "../../components/createBank/CreateBank";
import "./HomeAdmin.css";

const HomeAdmin = () => {
  const [createbank, setCreatebank] = useState(false);
  const open = () => {
    setCreatebank(!createbank);
  };
  return (
    <div className="HomeAdmin">
      <div className="AdminProfile">
        <img src="carte-credit.png" alt="" />
        <h2>name as admin</h2>
        <h3>nombre de dep cre 20</h3>
      </div>
      <button className="createBank" onClick={open}>
        Cree un point de retrait et deppot ?
        <label>
          <FiPlusCircle />
        </label>
      </button>
      {createbank ? <CreateBank open={open} /> : <></>}
      <DepList />
    </div>
  );
};

export default HomeAdmin;
