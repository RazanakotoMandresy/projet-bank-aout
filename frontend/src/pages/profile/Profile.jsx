import "./profile.css";
import ImageH1 from "../NotLoged/ImageH1";
import { useAppContext } from "../../App";
import ProfileToModified from "./ProfileToModified";
import ChangePP from "../../components/changePP/ChangePP";

const Profile = () => {
  const { userData, profilePict } = useAppContext();

  return (
    <div className="profile">
      <ImageH1 />
      <ChangePP profilePict={profilePict} />
      <ProfileToModified userData={userData} />
      <h4>l'agent sur votre compte est de {userData.money} ar</h4>
      <p>{userData.name} </p>
      <p>{userData.firstName}</p>
      <p>{userData.Email}</p>
    </div>
  );
};

export default Profile;
