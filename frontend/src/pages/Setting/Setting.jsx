import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./setting.css";
import Block from "../../components/Depot/BlockPPl/Block";
import Unblock from "../../components/Depot/BlockPPl/Unblock";

const Setting = () => {
  return (
    <>
      <HomeHeader />
      <div className="setting">
        <div className="leftSetting">
          <ul>
            <li>
              <button> faires des depots </button>
            </li>
            <li>
              <button>faires des retrais</button>
            </li>
            <li>
              <button>Edditer le profil</button>
            </li>
            <li>
              <button>parametres de epargnes</button>
            </li>
            <li>
              <button>parametres de bloquage de comptes</button>
            </li>
            <li>
              <button>parametres de suppression de votre comptes </button>
            </li>
          </ul>
        </div>
        <div className="rightSetting">
          {/* parametres de bloquees ihany ny mbola ampiseho aloha juste amitana boky */}
          <Block />
          <Unblock />
        </div>
      </div>
    </>
  );
};

export default Setting;
