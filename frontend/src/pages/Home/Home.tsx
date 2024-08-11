import React, { useContext } from "react";
// css du balance
import "./Balance.css";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import { UserContext } from "../../App";
import CenterHome from "../../components/CenterHome/CenterHome";
import TopSend from "../../components/TopSend/TopSend";
import ProfileHome from "../../components/ProfileHome/ProfileHome";
const Home: React.FC = () => {
  const userData = useContext(UserContext);
  return (
    <div className="Home">
      <HomeHeader />
      <div className="balance">
        <h2>Ar {userData?.money} </h2>
        <ProfileHome />
      </div>
      <CenterHome />
      <TopSend />
    </div>
  );
};

export default Home;
