import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import ImageH1 from "../ImageH1";
const HomeNotLoged = () => {
  return (
    <div className="home">
      <ImageH1 />
      <div className="desc">
        <h2>E-Bank Mada</h2>
        <h3>E-bank est une application web banquaires  </h3>
        <h4> Votre banque en ligne sécurisée, accessible partout .Consolidez vos comptes et suivez vos opérations en temps réel.</h4>
        <Link to={"/login"}>Inscrivez vous ici </Link>
      </div>
    </div>
  );
};

export default HomeNotLoged;
