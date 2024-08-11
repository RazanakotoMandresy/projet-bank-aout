import React, { useContext } from "react";
import "./Profile.css";
import ImageCarte from "../../components/ImageCarte/ImageCarte";
import { UserContext } from "../../App";
const Profile: React.FC = () => {
  const userData = useContext(UserContext);
  return (
    <div className="profile">
      <ImageCarte />
      <h4>l'agent sur votre compte est de {userData?.money} ar</h4>
      <p>{userData?.name} </p>
      <p>{userData?.firstName}</p>
      <p>{userData?.Email}</p>
    </div>
  );
};

export default Profile;
