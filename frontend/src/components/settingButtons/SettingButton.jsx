import React from "react";
import { Link } from "react-router-dom";

const SettingButton = ({ setChoiseParams }) => {
  return (
    <div className="leftSetting">
      <ul>
        <li>
          <button onClick={() => setChoiseParams("depot")}>
            {" "}
            faires des depots{" "}
          </button>
        </li>
        <li>
          <button onClick={() => setChoiseParams("retraits")}>
            faires des retrais
          </button>
        </li>
        <li>
          <Link to={"/profile"}>
            <button>Edditer le profil</button>
          </Link>
        </li>
        <li>
          <button onClick={() => setChoiseParams("epargne")}>
            parametres de epargnes
          </button>
        </li>
        <li>
          <button onClick={() => setChoiseParams("unblock")}>
            parametres de bloquage de comptesx
          </button>
        </li>
        <li>
          <button onClick={() => setChoiseParams("delete")}>
            parametres de suppression de votre comptes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SettingButton;
