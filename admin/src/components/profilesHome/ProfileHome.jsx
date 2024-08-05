import React from "react";
import { FiPlusCircle } from "react-icons/fi";
const ProfileHome = ({ open }) => {
  return (
    <div>
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
    </div>
  );
};

export default ProfileHome;
