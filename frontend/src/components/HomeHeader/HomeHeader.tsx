import React, { useContext, useState } from "react";
import { FiSettings } from "react-icons/fi";
import "./HomeHeader.css";
import { UserContext } from "../../App";
import { GetDate } from "../../utils/func/func";

const HomeHeader: React.FC = () => {
  const userData = useContext(UserContext);
  const [actualDate, _] = useState(GetDate());
  return (
    <div className="head">
      <ul>
        <li className="left"> Bonjour {userData?.name}</li>
        <li className="right">{actualDate}</li>
        <li className="right">
          <FiSettings /> parmetre globale
        </li>
      </ul>
    </div>
  );
};

export default HomeHeader;
