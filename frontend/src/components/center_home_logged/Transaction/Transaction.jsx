import React, { useState } from "react";
import "./transaction.css";
import { FiSend } from "react-icons/fi";
import {
  GetUserInfo,
  SendMoneyFunc,
} from "../../../logics/axios_logic/AxiosLogics";
import { Authentified } from "../../../logics/authentification/authentification";
import Confirm from "./Confirm";
const Transaction = () => {
  // nom de l'utilisateur ou uuid
  const [userTosend, setUserToSend] = useState("");
  const [value, setValue] = useState(Number);
  const [showSur, setShoSur] = useState(false);
  const [foundValue, setFoundValue] = useState({
    nameFirstName: "",
    Email: "",
    uuid: "",
    value: "",
  });
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
  const userTosendMoreInfo = async () => {
    try {
      const { data } = await GetUserInfo(userTosend);
      const changedValue = {
        nameFirstName: data.nameFirstName,
        Email: data.Email,
        uuid: data.uuid,
      };
      setFoundValue(changedValue);
      setShoSur(true);
    } catch (error) {
      console.log(error);
    }
  };
  const changeShow = () => {
    setShoSur(!showSur);
  };
  return (
    <>
      <div className="transaction">
        <h2>Transfert</h2>
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
            setValue(e.target.valueAsNumber);
          }}
          placeholder="Valeur que vous voulez envoyer"
        />
        <button onClick={userTosendMoreInfo}>
          <FiSend />
        </button>
        {showSur ? (
          <Confirm
            sendMoney={sendMoney}
            foundValue={foundValue}
            value={value}
            changeShow={changeShow}
          />
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default Transaction;
