import React from "react";
import { FiEdit, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./profilHome.css";
import { useAppContext } from "../../App";
import { url } from "../../logics/funLogic/func";

const ProfileHome = () => {
  const { userData } = useAppContext();
  return (
    <div className="profileH">
      <img src={`${url}/${userData.image}`} alt="" />
      <h1>{userData.AppUserName}</h1>
      <h2>
        {userData.name} {userData.firstName}
      </h2>
      <div className="parmProfil">
        <Link to={"/setting"}>
          Paramètres globaux <FiSettings />
        </Link>
        <Link to={`/profile`}>
          Éditer votre profil <FiEdit />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHome;
