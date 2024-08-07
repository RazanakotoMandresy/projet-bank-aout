import React from "react";
import { Link } from "react-router-dom";
import { FiCreditCard } from "react-icons/fi";
import "./depList.css"
const DepList = ({ depList }) => {
  return (
    <div>
      <div className="allMyDep">
        <ul>
          <h2>les gab sous votre responsabilite</h2>
          {depList.map((list) => {
            return (
              <li key={list.ID}>
                <Link to={`/${list.ID}`}>
                  lieux : {list.Lieux} argent {list.Money}
                  <label>
                    <FiCreditCard />
                  </label>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DepList;
