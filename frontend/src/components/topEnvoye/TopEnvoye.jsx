import React from "react";
import "./topEnvoyer.css";
import { Link } from "react-router-dom";
const TopEnvoye = () => {
  const getTopTrans = () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="envoyee">
      <ul>
        <li>
          <img src="carte-credit.png" alt="" />
          <Link>
            <h2>NOMMMMM</h2>
          </Link>
          <h3>Le total dev votre transaction avec et ...</h3>
        </li>
        <li>
          <img src="carte-credit.png" alt="" />
          <Link>
            <h2>NOMMMMM</h2>
          </Link>
          <h3>Le total dev votre transaction avec et ...</h3>
        </li>
        <li>
          <img src="carte-credit.png" alt="" />
          <Link>
            <h2>NOMMMMM</h2>
          </Link>
          <h3>Le total dev votre transaction avec et ...</h3>
        </li>
      </ul>
    </div>
  );
};

export default TopEnvoye;
