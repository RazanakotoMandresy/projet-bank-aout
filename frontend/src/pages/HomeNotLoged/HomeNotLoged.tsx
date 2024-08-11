import React from "react";
import "./home.css";
import ImageCarte from "../../components/ImageCarte/ImageCarte";
const HomeNotLoged: React.FC = () => {
  return (
    <div className="home">
      <ImageCarte />
      <div className="desc">
        <h2>Banque numerique,pour gerer votre argent</h2>
        <h3>Securiser , disponible en version web et mobile</h3>
        <h4>
          E-Bank app est compose d'une application web , et mobile pour une
          gestion de vos ressource financiaire
        </h4>
      </div>
    </div>
  );
};

export default HomeNotLoged;
