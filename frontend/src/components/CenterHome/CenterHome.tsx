import React, { useState } from "react";
import "./centerHome.css";
import { GetUserInfo, SendMoneyFunc } from "../../utils/Axios/AxiosLogics";
import { FiSend } from "react-icons/fi";
import Confirm from "../ConfirmTransaction/Confirm";
import { uInt32 } from "uint";
import { UserToSendType } from "../../utils/types/Types";

const CenterHome: React.FC = () => {
  const [userToSend, setUserToSend] = useState<string>("");
  const [value, setvalue] = useState<uInt32>(1);
  //   montre si la personne est sur
  const [sure, setSure] = useState<boolean>(false);
  const [userSendFound, setUserSendFound] = useState<UserToSendType>({
    nameFirstName: "",
    Email: "",
    uuid: "",
  });
  // 
  const sendMoney = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(value);
      const { data } = await SendMoneyFunc(userToSend, value);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const userTosendMoreInfo = async () => {
    try {
      const { data } = await GetUserInfo(userToSend);
      //   simple confirmation visuel

      setUserSendFound({
        nameFirstName: data.nameFirstName,
        Email: data.Email,
        uuid: data.uuid,
      });
      setSure(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="center">
      <div className="transaction">
        <h3>nom d'utilisateur que vous voulez envoyer l'argent ou son uuid</h3>
        <input
          type="text"
          id="sentTo"
          value={userToSend}
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
            setvalue(e.target.valueAsNumber);
          }}
          placeholder="Valeur que vous voulez envoyer"
        />
        <button onClick={userTosendMoreInfo}>
          <FiSend />
        </button>
        {sure ? (
          <Confirm
            sendMoney={sendMoney}
            userSendFound={userSendFound}
            value={value}
            setSure={setSure}
          />
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
};

export default CenterHome;
