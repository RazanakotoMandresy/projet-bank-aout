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
            <Link to={"/"}> En savoir plus </Link>
          </li>
          <li>
            <Link> Avantages</Link>
          </li>
          <li>
            <Link> Reseaux sociaux</Link>
          </li>
        </div>
        <div className="right">
          <li>
            <Link> Login</Link>
          </li>
          <li>
            <Link> Register</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
