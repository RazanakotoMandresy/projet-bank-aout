import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import InputSearch from "../InputForSearch/InputSearch";
import CenterNav from "./centerNavbar/CenterNav";
import { BiMenu } from "react-icons/bi";
const Navbar = ({ connected }) => {
  // TODO implementing a real workflow
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <Link to={"/"} reloadDocument="true">
            E-Bank Mada
          </Link>
        </li>
        <li className="menuNav">
          {/* montr le menun vetical  */}
          <button onClick={() => setMenu(!menu)}>
            <BiMenu />
          </button>
        </li>
        
        {menu ? (
          <div className="clickedMenu">
            <CenterNav />
          </div>
        ) : (
          <></>
        )}
        <div className="cent">
          {/* Centernav non connecter Input Search Connecter */}
          {connected ? <InputSearch /> : <CenterNav />}
        </div>
        <div className="right">
          {connected ? (
            <>
              {/* TODO solution provisoire ihany ito */}
              <li>
                <Link
                  to={"/"}
                  onClick={() => {
                    localStorage.removeItem("token");
                  }}
                  reloadDocument="true"
                  className="register"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/login"}>connexion</Link>
              </li>

              <li>
                <Link className="register" to={"/register"}>
                  inscription
                </Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
