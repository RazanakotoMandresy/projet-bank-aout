import React from "react";
import "./centerHomeLoged.css";
import Transaction from "./Transaction/Transaction";
import ProfileHome from "./profileHome/ProfileHome";

const CenterHomeLoged = () => {
  return (
    <div className="center">
      <Transaction />
      <ProfileHome />
    </div>
  );
};

export default CenterHomeLoged;
