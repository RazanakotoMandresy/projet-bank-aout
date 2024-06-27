import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
const HomeNotLoged = () => {
  return (
    <div className="home">
      <div className="image-home">
        <img src="carte-credit.png" alt="" />
      </div>
      <div className="titre">
        <h1>E-BANK MADA</h1>
      </div>
      <div className="desc">
        <h2>Banque numerique,pour gerer votre argent</h2>
        <h3>Securiser , disponible en version web et mobile</h3>
        <h4>
          E-Bank app est compose d'une application web , et mobile pour une
          gestion de vos ressource financiaire
        </h4>
        <Link>Telecharger l'application mobile ici</Link>
      </div>
    </div>
  );
};

export default HomeNotLoged;
