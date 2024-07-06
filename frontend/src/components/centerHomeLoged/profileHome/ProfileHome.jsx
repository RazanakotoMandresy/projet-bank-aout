import React from "react";
import { FiEdit, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./profilHome.css";
const ProfileHome = ({ datas }) => {
  return (
    <div className="profileH">
      <img src="carte-credit.png" alt="" />
      <h1>{datas.AppUserName}</h1>
      <h2>
        {datas.name} {datas.firstName}
      </h2>
      <div className="parmProfil">
        <Link to={"/setting/:uuid"}>
          Parametre generales <FiSettings />
        </Link>
        <Link to={`/profile/${datas.UUID}`} >
          Editer le profile <FiEdit />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHome;
