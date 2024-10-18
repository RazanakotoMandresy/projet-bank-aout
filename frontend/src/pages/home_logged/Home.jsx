import HomeHeader from "../../components/home_header/HomeHeader";
import TopEnvoye from "../../components/top_send/TopEnvoye";
import CenterHomeLoged from "../../components/center_home_logged/CenterHomeLoged";
import ProfileHome from "../../components/profile_home/ProfileHome";
import Messages from "../../components/home_message/Messages";
import "./home.css";
const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <ProfileHome />
      <div className="homeResponsive">
        <CenterHomeLoged />
        <TopEnvoye />
        <Messages />
      </div>
    </div>
  );
};

export default Home;
