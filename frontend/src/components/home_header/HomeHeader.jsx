import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import "./HomeHeader.css";
import { useAppContext } from "../../App";
import { GetDate } from "../../logics/func_logic/func";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  const { userData } = useAppContext();
  const [actualDate, _] = useState(GetDate());
  return (
    <div className="head">
      <ul>
        <li className="left"> Bonjour {userData.name}</li>
        <li className="right">{actualDate}</li>
        <li className="right">
          <Link to={"/setting"} >
            <FiSettings /> Paramètres globaux
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeHeader;
