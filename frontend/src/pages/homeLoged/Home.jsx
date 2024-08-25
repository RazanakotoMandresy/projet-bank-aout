import HomeHeader from "../../components/HomeHeader/HomeHeader";
import TopEnvoye from "../../components/topEnvoye/TopEnvoye";
import CenterHomeLoged from "../../components/centerHomeLoged/CenterHomeLoged";
import ProfileHome from "../../components/profileHome/ProfileHome";
import Messages from "../../components/HomeMessages/Messages";

const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <ProfileHome />
      <CenterHomeLoged />
      <TopEnvoye />
      <Messages />
    </div>
  );
};

export default Home;
