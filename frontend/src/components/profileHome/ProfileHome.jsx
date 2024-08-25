import React from "react";
import { FiEdit, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./profilHome.css";
import { useAppContext } from "../../App";
import { url } from "../../logics/funLogic/func";
import { BiCreditCard, BiLogoMessenger, BiMoneyWithdraw } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
const ProfileHome = () => {
  const { userData } = useAppContext();
  return (
    <div className="profileH">
      <h2>Ar {userData.money} </h2>
      <img src={`${url}/${userData.image}`} alt="" />
      <h1>{userData.AppUserName}</h1>
      <h2>
        {userData.name} {userData.firstName}
      </h2>
      <div className="parmProfil">
        {/* div only responsive rehefa responsive ihany compose ana boutton messages , pour voir la listes des messages que l'on a envoyee */}
        <div className="onlyResponsive">
          <button>
            voirs tous vos messages <BiLogoMessenger />
          </button>
          <button>
            transferer de l'argents <BiCreditCard />
          </button>
          <button>
            voir la liste de vos transaction
            <BsPeopleFill />
          </button>
        </div>
        <Link to={"/setting"}>
          Paramètres globaux <FiSettings />
        </Link>
        <Link to={`/profile`}>
          Éditer votre profil <FiEdit />
        </Link>
      </div>
    </div>
  );
};

export default ProfileHome;
