import React from "react";
import "./transaction.css";
import { FiSend } from "react-icons/fi";
const Transaction = () => {
  return (
    <div className="transaction">
      <form action="">
        <h3>nom d'utilisateur que vous voulez envoyer l'argent ou son uuid</h3>
        <input
          type="text"
          name=""
          id="sentTo"
          placeholder="uuid ou AppUserName de la personne que vous voulez envoyer de l'argent"
        />
        <h3>la valeur du montant</h3>
        <input
          type="number"
          name=""
          id="Value"
          placeholder="Valeur que vous voulez envoyer"
        />
        <button type="submit">
          <FiSend />
        </button>
      </form>
    </div>
  );
};

export default Transaction;
