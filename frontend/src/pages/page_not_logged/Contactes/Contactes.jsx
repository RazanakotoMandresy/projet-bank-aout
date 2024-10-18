import React from "react";
import ImageH1 from "../ImageH1";
import { Link } from "react-router-dom";

const Contactes = () => {
  return (
    <div className="home">
      <ImageH1 />
      <div className="desc">
        <h3>
          Pour des question vous pouvez envoyez des email aux admin via
          <label> E-bank@Mada.mg </label>
        </h3>
        <h4>
          Mais si vous vous inscrivez sur notre plateforme, vous pourrez
          contacter les administrateurs directement via le site.
        </h4>
        <Link to={"/login"}>Inscrivez vous ici </Link>
      </div>
    </div>
  );
};

export default Contactes;
