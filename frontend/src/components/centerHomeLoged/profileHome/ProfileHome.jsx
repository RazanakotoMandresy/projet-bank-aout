import React from "react";
import { FiEdit, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./profilHome.css";
import { useAppContext } from "../../../App";

const ProfileHome = () => {
  const {userData} = useAppContext();
  return (
    <div className="profileH">
      <img src="carte-credit.png" alt="" />
      <h1>{userData.AppUserName}</h1>
      <h2>
        {userData.name} {userData.firstName}
      </h2>
      <div className="parmProfil">
        <Link to={"/setting/:uuid"}>
          Parametre generales <FiSettings />
        </Link>
        <Link to={`/profile/${userData.UUID}`}>
          Editer le profile <FiEdit />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHome;
