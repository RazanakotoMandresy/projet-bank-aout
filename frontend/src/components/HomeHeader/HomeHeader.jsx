import React from "react";
import { FiPlusCircle, FiSettings } from "react-icons/fi";
import "./HomeHeader.css";
const HomeHeader = ({ datas }) => {
  return (
    <div className="head">
      <ul>
        <li className="left"> Bonjour {datas.firstName}</li>
        <li className="right">
          <FiPlusCircle /> ajouter un fammille
        </li>
        <li className="right">date ajd</li>
        <li className="right">
          <FiSettings /> parmetre globale
        </li>
      </ul>
    </div>
  );
};

export default HomeHeader;
