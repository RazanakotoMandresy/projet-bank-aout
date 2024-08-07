import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="logo">E-Bank Mada</li>
        <div className="cent">
          <li>
            <Link to={"/info"}> plus d'info </Link>
          </li>
          <li>
            <Link>Fonctionnalite</Link>
          </li>
          <li>
            <Link>contactes</Link>
          </li>
        </div>
        <div className="right">
          <li>
            <Link to={"/login"}>connexion</Link>
          </li>
          <li>
            <Link className="register" to={"/register"}>
              inscription
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
