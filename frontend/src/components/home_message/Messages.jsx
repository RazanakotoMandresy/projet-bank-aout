import React from "react";
import "./messages.css";
import { Link } from "react-router-dom";
import { url } from "../../logics/func_logic/func";
const Messages = () => {
  return (
    <div className="messages">
      {/* <input
        type="search"
        name="searchMsg"
        id="searchMsg"
        placeholder="cherchez des messages"
      /> */}
      <ul>
        <li>
          <img
            src={`${url}/upload/Messenger_creation_6183126a-12c7-4cf1-8d83-1e269d267f768985131030829011946.png`}
            alt="defaultPP.jpg"
          />
          <Link to={"/usr/08843969-25a7-4bf2-ad9d-afba3aa17181"}>
            mandresy7
          </Link>
          <b>Vous :</b>
          <label>salut</label>
        </li>
        <li>
          <img src={`defaultPP.jpg`} alt="defaultPP.jpg" />
          <Link to={"/user/b24e6a36-014c-4124-af8c-1465f0c6da0a"}>
            ElieDiaryM
          </Link>
          <b>Vous :</b>
          <label>Je vous ais envoyer 400000 ar</label>
        </li>
      </ul>
    </div>
  );
};

export default Messages;
