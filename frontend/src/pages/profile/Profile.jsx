import React, { useState } from "react";
import "./profile.css";
import ImageH1 from "../NotLoged/ImageH1";
import { FiCamera } from "react-icons/fi";
import { useAppContext } from "../../App";
import ProfileToModified from "./ProfileToModified";
const Profile = () => {
  const { userData } = useAppContext();
  return (
    <div className="profile">
      <div className="leftSide">
        <div className="imagePP">
          <button>
            <img src={`http://localhost:3000/${userData.image}`} alt="" />
            <label>
              <FiCamera />
            </label>
          </button>
          <ProfileToModified userData={userData}/>
          <h4>l'agent sur votre compte est de {userData.money} ar</h4>
          <p>{userData.name} </p>
          <p>{userData.firstName}</p>

          <p>{userData.Email}</p>
        </div>
      </div>
      <ImageH1 />
    </div>
  );
};

export default Profile;
