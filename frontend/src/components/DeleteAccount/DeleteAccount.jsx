import React from "react";
import { BsTrash2 } from "react-icons/bs";
import "./deleteAcc.css";
const DeleteAccount = () => {
  return (
    <div className="deleteAcc">
      <img src="defaultPP.jpg" alt="" />
      <h4>
        Vous etes sur le parametre de suppression de comptes si vous voulez le
        recupperer apres la suppression contactez les admin
      </h4>
      <button>
        supprimer votre comptes
        <span>
          <BsTrash2 />
        </span>
      </button>
    </div>
  );
};

export default DeleteAccount;
