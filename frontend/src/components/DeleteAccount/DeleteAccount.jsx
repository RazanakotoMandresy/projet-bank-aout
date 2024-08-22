import React from "react";
import { BsTrash2 } from "react-icons/bs";
import "./deleteAcc.css";
import { url } from "../../logics/funLogic/func";
const DeleteAccount = ({ userData, SettingUser, setDelMyAcc, deleteMyAcc }) => {
  return (
    <div className="deleteAcc">
      <img src={`${url}/${userData.image}`} alt="" />
      <h4>
        Vous etes sur le parametre de suppression de comptes si vous voulez le
        recupperer apres la suppression contactez les admin
      </h4>
      <button
        onClick={() => {
          setDelMyAcc(true);
          SettingUser();
        }}
      >
        supprimer votre comptes
        <span>
          <BsTrash2 />
        </span>
      </button>
    </div>
  );
};

export default DeleteAccount;
