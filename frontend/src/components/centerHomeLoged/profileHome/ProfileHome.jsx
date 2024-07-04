import React from "react";
import { FiEdit, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./profilHome.css"
const ProfileHome = () => {
  return (
    <div className="profileH">
      <img src="carte-credit.png" alt="" />
      <h1>AppUserName</h1>
      <h2>FirstName name</h2>
      <div className="parmProfil">
        <Link>
          Parametre generales <FiSettings />
        </Link>
        <Link>Editer le profile <FiEdit/></Link>
      </div>
    </div>
  );
};

export default ProfileHome;
