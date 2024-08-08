import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Notification from "../../components/HomeNotification/Notification";
import TopEnvoye from "../../components/topEnvoye/TopEnvoye";
import CenterHomeLoged from "../../components/centerHomeLoged/CenterHomeLoged";
import "./Balance.css";
import { useAppContext } from "../../App";
import ProfileHome from "../../components/profileHome/ProfileHome";

const Home = () => {
  const { userData } = useAppContext();
  return (
    <div className="Home">
      <HomeHeader />
      <div className="balance">
        <h2>Ar {userData.money} </h2>
        <ProfileHome/>
      </div>
      <CenterHomeLoged />
      <TopEnvoye />
      <Notification />
    </div>
  );
};

export default Home;
