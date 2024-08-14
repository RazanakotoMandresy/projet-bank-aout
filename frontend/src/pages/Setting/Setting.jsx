import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./setting.css";
import { CgUnblock } from "react-icons/cg";
import { BiBlock } from "react-icons/bi";
const Setting = () => {
  return (
    <>
      <HomeHeader />
      <div className="setting">
        <div className="leftSetting">
          <ul>
            <li>
              <button>parametres de suppression d'epargnes</button>
            </li>
            <li>
              <button>parametres de bloquage de comptes</button>
            </li>
            <li>
              <button>parametre de suppression de votre comptes </button>
            </li>
            <li>
              <button> faires des depots </button>
            </li>
            <li>
              <button>faires des retrais</button>
            </li>
            <li>
              <button>Edditer le profil</button>
            </li>
          </ul>
        </div>
        <div className="rightSetting">
          {/* parametres de bloquges ihany ny mbola ampiseho aloha juste amitana boky    */}
          <div className="block">
            <h4>listes des personnes que vous avez bloquer</h4>
            <ul>
              <li>
                Mandresy_Diary
                <button>
                  debloquer
                  <CgUnblock />
                </button>
              </li>
              <li>
                Rakoto45
                <button>
                  debloquer
                  <CgUnblock />
                </button>
              </li>
              <li>
                ELie_Jao
                <button>
                  debloquer
                  <CgUnblock />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
