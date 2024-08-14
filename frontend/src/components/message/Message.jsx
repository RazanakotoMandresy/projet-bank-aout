import React from "react";
import { url } from "../../logics/funLogic/func";
import { BiSend } from "react-icons/bi";
import { WebSocket } from "vite";

const Message = ({ userData, userFound }) => {
  // appeler dans GetUser
  var socket = new WebSocket("ws://localhost:3000/ws");
  let connect = () => {
    console.log("Attempting Connection...");
    socket.onopen = () => {
      console.log("Successfully Connected");
    };
    socket.onmessage = (msg) => {
      console.log(msg);
    };
    socket.onclose = (event) => {
      console.log("Socket Closed Connection: ", event);
    };
    socket.onerror = (error) => {
      console.log("Socket Error: ", error);
    };
  };
  let message 
  return (
    <div className="message">
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
