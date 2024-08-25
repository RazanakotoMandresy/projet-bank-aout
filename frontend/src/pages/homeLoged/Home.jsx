import HomeHeader from "../../components/HomeHeader/HomeHeader";
import TopEnvoye from "../../components/topEnvoye/TopEnvoye";
import CenterHomeLoged from "../../components/centerHomeLoged/CenterHomeLoged";
import ProfileHome from "../../components/profileHome/ProfileHome";
import Messages from "../../components/HomeMessages/Messages";
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
