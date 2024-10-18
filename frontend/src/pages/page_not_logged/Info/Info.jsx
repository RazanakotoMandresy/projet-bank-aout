import React from "react";
import ImageH1 from "../ImageH1";
import "./info.css";
const Info = () => {
  return (
    <div className="info">
      <ImageH1 />
      <div className="txt">
        <h1>Information</h1>
        <p>
          E-bank, c'est votre banque en ligne simple et sécurisée. Effectuez vos
          virements, consultez votre solde et gérez votre budget en quelques
          clics, où que vous soyez.
        </p>
      </div>
    </div>
  );
};
 
export default Info;
