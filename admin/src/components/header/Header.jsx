import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = ({props}) => {
  const { changeMode, Mode } = props;
  return (
    <div className="Header">
      <button
        onClick={changeMode}
      >
        {Mode ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default Header;
