import React from "react";
import "./messages.css";
import { Link } from "react-router-dom";
const Messages = () => {
  return (
    <div className="messages">
      <input
        type="search"
        name="searchMsg"
        id="searchMsg"
        placeholder="cherchez des messages"
      />
      <ul>
        <li>
          <img src="defaultPP.jpg" alt="defaultPP.jpg" />
          <Link to={"/user/:uuid"}> Rakoto_Andria </Link>
          <b>Vous :</b>
          <label>
            je vous ai envoyer 50.000ar veillez verifier votre comptes s'il vous
            plais 😊
          </label>
        </li>
        <li>
          <img src="defaultPP.jpg" alt="defaultPP.jpg" />
          <Link to={"/user/:uuid"}> Rakoto15 </Link>
          <b>Vous :</b>
          <label>Peut tu m'envoyer 10.000ar s'il te plait 😅?</label>
        </li>
      </ul>
    </div>
  );
};

export default Messages;
