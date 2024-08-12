import React from "react";
import ImageH1 from "../ImageH1";
import { Link } from "react-router-dom";

const Fonctionnalitees = () => {
  return (
    <div className="info">
      <ImageH1 />
      <div className="txt">
        <h1>fonctionnalités</h1>
        <p>
          Les fonctionnalités de E-bank sont nombreuses, comme les envois, les
          retraits, les dépôts, ... et encore plus. 🫢 Inscrivez-vous.
        </p>
        <Link to={"/login"}>Inscrivez vous ici </Link>
      </div>
    </div>
  );
};

export default Fonctionnalitees;
