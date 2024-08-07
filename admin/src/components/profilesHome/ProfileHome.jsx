import React from "react";
import { FiPlus } from "react-icons/fi";
const ProfileHome = ({ open, admin }) => {
  return (
    <div>
      <div className="AdminProfile">
        <h2>name {admin.Name}</h2>
        <h3>totals send {admin.TotalSend} </h3>
      </div>
      <button className="createBank" onClick={open}>
        Cree un point de retrait et deppot ?
        <label>
          <FiPlus/>
        </label>
      </button>
    </div>
  );
};

export default ProfileHome;
