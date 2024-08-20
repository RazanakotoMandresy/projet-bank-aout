import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
// import { useAppContext } from "../../App";
import InputSearch from "../InputForSearch/InputSearch";
const Navbar = ({ connected }) => {
  // const { userData } = useAppContext();
  // TODO implementing a real workflow
  // if
  return (
    <div className="navbar">
      <ul>
        <li className="logo">E-Bank Mada</li>
        <div className="cent">
          {connected ? (
            <InputSearch />
          ) : (
            <>
              <li>
                <Link to={"/info"}> plus d'info </Link>
              </li>
              <li>
                <Link to={"/func"}>fonctionnalités</Link>
              </li>
              <li>
                <Link to={"/contactes"}> contactes</Link>
              </li>
            </>
          )}
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
