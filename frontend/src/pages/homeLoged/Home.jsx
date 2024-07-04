import React, { useCallback, useEffect } from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Notification from "../../components/HomeNotification/Notification";
import TopEnvoye from "../../components/topEnvoye/TopEnvoye";
import CenterHomeLoged from "../../components/centerHomeLoged/CenterHomeLoged";
import PlaceBank from "../../components/place/PlaceBank";
import Historique from "../../components/historique/Historique";
import "./Home.css";
import { GetUser } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
const Home = () => {
  const getHome = async () => {
    try {
      const { data } = await GetUser(Authentified);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHome();
  }, []);
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
