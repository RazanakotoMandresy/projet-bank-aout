import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Notification from "../../components/HomeNotification/Notification";
import TopEnvoye from "../../components/topEnvoye/TopEnvoye";
import CenterHomeLoged from "../../components/centerHomeLoged/CenterHomeLoged";
import PlaceBank from "../../components/place/PlaceBank";
import Historique from "../../components/historique/Historique";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <HomeHeader />
      <div className="balance">
        <h2>Ar 4546564</h2>
        <PlaceBank />
        <Historique />
      </div>
      <CenterHomeLoged />
      <TopEnvoye />
      <Notification />
    </div>
  );
};

export default Home;
