import React from "react";
import "./centerHomeLoged.css";
import Transaction from "./Transaction/Transaction";
import ProfileHome from "./profileHome/ProfileHome";

const CenterHomeLoged = ({datas}) => {
  return (
    <div className="center">
      <Transaction />
      <ProfileHome datas={datas} />
    </div>
  );
};

export default CenterHomeLoged;
