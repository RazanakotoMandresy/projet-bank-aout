import React from "react";
import { FiMoon, FiSearch, FiSun } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";
import { RemoveFromLocalStorage } from "../../utils/localStorageManip/localStorageManip";
const Header = ({ props }) => {
  const { changeMode, Mode, connected, logedBool, changeLog } = props;
  console.log("logedBool", logedBool, "connected", connected);
  return (
    <div className="Header">
      <div className="search">
        <input
          type="text"
          name="searchBank"
          id="searchBank"
          placeholder={`chercher une banque`}
        />
        <label htmlFor="searchBank">
          <FiSearch />
        </label>
      </div>
      {/* <button
        onClick={() => {
          changeMode();
        }}
        className="mode"
      >
        {Mode ? <FiSun /> : <FiMoon />}
      </button> */}
      {!logedBool ? (
        <Link to={"/login"} reloadDocument={true}>
          Login
        </Link>
      ) : (
        <button
          onClick={() => {
            RemoveFromLocalStorage("token");
            changeLog();
          }}
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
