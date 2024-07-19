import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./Header.css";
const Header = ({ props }) => {
  const { changeMode, Mode } = props;
  return (
    <div className="Header">
      <button onClick={changeMode}>{Mode ? <FiSun /> : <FiMoon />}</button>
      <button>Login</button>
    </div>
  );
};

export default Header;
