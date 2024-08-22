import React from "react";
import { Link } from "react-router-dom";
import { SetSettingState } from "../../logics/localstorageLog/LocalstorageLog";

const SettingButton = ({ setChoiseParams }) => {
  return (
    <div className="leftSetting">
      <ul>
        <li>
          <button
            onClick={() => {
              setChoiseParams("depot");
              SetSettingState("depot");
            }}
          >
            faires des depots
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setChoiseParams("retraits");
              SetSettingState("retraits");
            }}
          >
            faires des retrais
          </button>
        </li>
        <li>
          <Link to={"/profile"}>
            <button>Edditer le profil</button>
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              setChoiseParams("epargne");
              SetSettingState("epargne");
            }}
          >
            parametres de epargnes
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setChoiseParams("unblock");
              SetSettingState("unblock");
            }}
          >
            parametres de bloquage de comptesx
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setChoiseParams("delete");
              SetSettingState("delete");
            }}
          >
            parametres de suppression de votre comptes
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SettingButton;
