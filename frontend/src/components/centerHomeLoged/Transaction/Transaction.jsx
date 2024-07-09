import React, { useState } from "react";
import "./transaction.css";
import { FiSend } from "react-icons/fi";
import { SendMoneyFunc } from "../../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../../logics/authentification/authentification";
const Transaction = () => {
  const [userTosend, setUserToSend] = useState("");
  const [value, setValue] = useState(1);
  const sendMoney = async (e) => {
    e.preventDefault();
    try {
      console.log(value);
      const values = { value: value };
      const { data } = await SendMoneyFunc(userTosend, values, Authentified);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="transaction">
      <form onSubmit={sendMoney}>
        <h3>nom d'utilisateur que vous voulez envoyer l'argent ou son uuid</h3>
        <input
          type="text"
          id="sentTo"
          value={userTosend}
          onChange={(e) => {
            setUserToSend(e.target.value);
          }}
          placeholder="uuid ou AppUserName de la personne que vous voulez envoyer de l'argent"
        />
        <h3>la valeur du montant</h3>
        <input
          type="number"
          id="Value"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
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
