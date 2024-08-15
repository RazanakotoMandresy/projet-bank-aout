import React from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./setting.css";
// import Block from "../../components/BlockPPl/Block";
import Unblock from "../../components/BlockPPl/Unblock";
import DeleteAccount from "../../components/DeleteAccount/DeleteAccount";
import Depot from "../../components/DepotRetrait/Depot";
import Retrait from "../../components/DepotRetrait/Retrait";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";
// import Sur from "../../components/SurAboutSomething/Sur"
const Setting = () => (
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
            <Link to={"/profile"}>
              <button>Edditer le profil</button>
            </Link>
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
        {/* <Unblock   /> */}
        {/* <DeleteAccount/> */}
        {/* <Depot /> */}
        {/* <Retrait/> */}
        {/* PROFILE LIEN MAKANY FLEMME TO CODE ALL OF THIS FROM SCRATCH */}
        {/* <Profile/> */}
        
      </div>
    </div>
  </>
);

export default Setting;
