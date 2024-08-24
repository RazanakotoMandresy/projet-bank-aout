import React from "react";
import { Link } from "react-router-dom";

const CenterNav = () => {
  return (
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
  );
};

export default CenterNav;
