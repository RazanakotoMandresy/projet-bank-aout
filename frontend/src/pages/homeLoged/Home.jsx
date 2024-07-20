import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Notification from "../../components/HomeNotification/Notification";
import TopEnvoye from "../../components/topEnvoye/TopEnvoye";
import CenterHomeLoged from "../../components/centerHomeLoged/CenterHomeLoged";
import PlaceBank from "../../components/place/PlaceBank";
import "./Home.css";
import { useAppContext } from "../../App";

const Home = () => {
  const { userData } = useAppContext();
  return (
    <div className="Home">
      <HomeHeader />
      <div className="balance">
        <h2>Ar {userData.money} </h2>
        <PlaceBank />
      </div>
      <CenterHomeLoged />
      <TopEnvoye />
      <Notification />
    </div>
  );
};

export default Home;
