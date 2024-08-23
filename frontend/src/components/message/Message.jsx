import React, { useEffect, useState } from "react";
import { url } from "../../logics/funLogic/func";
import { BiSend } from "react-icons/bi";
import { connect, sendMsg } from "../../logics/socket/socketLogics";
const Message = ({ userData, userFound }) => {
  // appeler dans GetUser

  const [message, setMessage] = useState("");
  useEffect(() => {
    connect(); // Assuming connect handles connection logic
  }, []);
  const handleSend = () => {
    sendMsg("hello");
    setMessage("Message sent");
  };
  return (
    <div className="message">
      {/* <button onClick={handleSend}> MESSS</button> */}
      <h4> {userFound.AppUserName}</h4>
      <ul>
        <li className="send">
          <label>
            <img src={`${url}/${userData.image}`} alt={userData.image} />
            Bonjour, pourriez-vous m'envoyer 18 000 ariary, s'il vous plaît ?
            J'en aurais besoin cet après-midi.
          </label>
        </li>
        <li className="receive">
          <label>
            <img src={`${url}/${userFound.image}`} alt={userFound.image} />
            Bonjour, je n'ai malheureusement pas la possibilité d'envoyer cette
            somme aujourd'hui. Mais peut-être demain.
          </label>
        </li>
        {/* TODO tsy mety le reponse  */}
      </ul>
      <form action="">
        <input type="text" placeholder="ecriver votre message ........" />
        <button>
          <BiSend />
        </button>
      </form>
    </div>
  );
};

export default Message;
