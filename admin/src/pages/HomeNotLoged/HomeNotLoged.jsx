import React from "react";
import { Link } from "react-router-dom";
import "./homeNotLoged.css"
const HomeNotLoged = () => {
  return (
    <div className="homeNotLoged">
      <h3>
        Il semble qu'il n'y ai aucun compte connecter vous pouvez vous connecter
        en remplissant le champ suivant
      </h3>
      vous avez deja un compte ? <Link to={"/login"}>LOGIN</Link>
      pas encore de compte ? <Link to={"/register"}>REGISTER</Link>
    </div>
  );
};

export default HomeNotLoged;
