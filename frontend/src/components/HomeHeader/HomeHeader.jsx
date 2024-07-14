import React, { useState } from "react";
import { FiPlusCircle, FiSettings } from "react-icons/fi";
import "./HomeHeader.css";
const getDate = () => {
  const ajd = new Date();
  const month = ajd.getMonth() + 1;
  const year = ajd.getFullYear();
  const date = ajd.getDate();
  return `${month}/${date}/${year}`;
};
const HomeHeader = () => {
  const [actualDate, setActualDate] = useState(getDate());
  return (
    <div className="head">
      <ul>
        <li className="left"> Bonjour jkjnj</li>
        <li className="right">
          <FiPlusCircle /> ajouter un fammille
        </li>
        <li className="right">{actualDate}</li>
        <li className="right">
          <FiSettings /> parmetre globale
        </li>
      </ul>
    </div>
  );
};

export default HomeHeader;
