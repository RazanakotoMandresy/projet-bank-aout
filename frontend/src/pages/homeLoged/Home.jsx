import React, { useCallback, useEffect, useState } from "react";
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
  const [datas, setData] = useState({});
  const [connected, setConnected] = useState(false);
  const getUser = async () => {
    try {
      const { data } = await GetUser(Authentified);
      setData(data);
      setConnected(true);
    } catch (error) {
      console.log("vous pouvez vous conneter sur login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="Home">
      <HomeHeader datas={datas} />
      <div className="balance">
        <h2>Ar {datas.money} </h2>
        <PlaceBank />
        <Historique />
      </div>
      <CenterHomeLoged datas={datas} />
      <TopEnvoye />
      <Notification />
    </div>
  );
};

export default Home;
