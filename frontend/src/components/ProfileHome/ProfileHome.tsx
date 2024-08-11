import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Link } from "react-router-dom";
import { FiEdit, FiSettings } from "react-icons/fi";
import "./profilHome.css";

const ProfileHome: React.FC = () => {
  const userData = useContext(UserContext);
  return (
    <div className="profileH">
      <img
        src={`http://localhost:3000/${userData?.image}`}
        alt={userData?.image}
      />
      <h1>{userData?.AppUserName}</h1>
      <h2>
        {userData?.name} {userData?.firstName}
      </h2>
      {/* TODO RN imple profile et setting */}
      <div className="parmProfil">
        <Link to={"/setting"}>
          Parametre generales <FiSettings />
        </Link>
        <Link to={`/profile`}>
          Editer le profile <FiEdit />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHome;
