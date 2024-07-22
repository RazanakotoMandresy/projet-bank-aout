import React, { useState } from "react";
import "./profile.css";
import ImageH1 from "../NotLoged/ImageH1";
import { FiCamera } from "react-icons/fi";
import { useAppContext } from "../../App";
import ProfileToModified from "./ProfileToModified";
import { PostPPfunc } from "../../logics/AxiosLogics/AxiosLogics";
import { AuthentifiedMultipart } from "../../logics/authentification/authentification";

const Profile = () => {
  const { userData } = useAppContext();
  const [profilePict, setProfilePict] = useState("");

  const postPP = async (e) => {
    e.preventDefault();
    try {
      const value = {
        filePP: profilePict[0],
      };
      const { data } = await PostPPfunc(value, AuthentifiedMultipart);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile">
      <form onSubmit={postPP} className="formPP">
        <label htmlFor="files">
          <img src={`http://localhost:3000/${userData.image}`} alt="" />
          <FiCamera />
        </label>
        <input
          id="files"
          type="file"
          name="file"
          onChange={(e) => {
            setProfilePict(e.target.files);
          }}
        />
      </form>

      <ProfileToModified userData={userData} />
      <h4>l'agent sur votre compte est de {userData.money} ar</h4>
      <p>{userData.name} </p>
      <p>{userData.firstName}</p>
      <p>{userData.Email}</p>
      <ImageH1 />
    </div>
  );
};

export default Profile;
