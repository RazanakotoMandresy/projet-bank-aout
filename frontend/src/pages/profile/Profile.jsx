import "./profile.css";
import ImageH1 from "../page_not_logged/ImageH1";
import { useAppContext } from "../../App";
import ProfileToModified from "./ProfileToModified";
import ChangePP from "../../components/change_pp/ChangePP";

const Profile = () => {
  const { userData } = useAppContext();

  return (
    <div className="profile">
      <ImageH1 />
      <ChangePP userData={userData} />
      <ProfileToModified userData={userData} />
      <h4>l'agent sur votre compte est de {userData.money} ar</h4>
      <p>{userData.name} </p>
      <p>{userData.firstName}</p>
      <p>{userData.Email}</p>
    </div>
  );
};

export default Profile;
