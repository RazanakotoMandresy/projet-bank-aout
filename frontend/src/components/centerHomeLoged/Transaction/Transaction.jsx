import React, { useState } from "react";
import "./transaction.css";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import {
  GetUserInfo,
  SendMoneyFunc,
} from "../../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../../logics/authentification/authentification";

const Transaction = () => {
  // nom de l'utilisateur ou uuid
  const [userTosend, setUserToSend] = useState("");
  const [value, setValue] = useState(1);
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
  return (
    <>
      <div className="transaction">
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
        <button onClick={userTosendMoreInfo}>
          <FiSend />
        </button>
        {showSur ? (
          <div className="surTrans">
            <form onSubmit={sendMoney}>
              <h3>
                les informations sur le{"(a)"} personne que vous voulez envoyer
                de l'argents
              </h3>
              <p>
                <b>nom</b> :{foundValue.nameFirstName}
              </p>
              <p>
                <b>email</b> :{foundValue.Email}
              </p>
              <p>
                <b>uuid</b> :{foundValue.uuid}
              </p>
              <h3>la valeur de l'argent que vous voulez envoyer est :</h3>
              <h4>{value} ar</h4>
              <button type="submit">
                <FiCheckCircle />
              </button>
            </form>
          </div>
        ) : (
          <> </>
        )}
      </div>
    </>
  );
};

export default Transaction;
