//home admin mahazo dashbord mialy genre graphe,nb user
import React from "react";
import { Link } from "react-router-dom";
import "./HomeAdmin.css";
const HomeAdmin = () => {
  return (
    <div>
      <div className="createBank">
        <img src="carte-credit.png" alt="carte-credit.png" />
        <Link to={"/create-bank"}>
          <h1>Cree un point de depot et retrait ?</h1>
        </Link>
      </div>
    </div>
  );
};

export default HomeAdmin;
