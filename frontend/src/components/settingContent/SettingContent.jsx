import React from "react";
import Depot from "../DepotRetrait/Depot";
import Retrait from "../DepotRetrait/Retrait";
import Epargne from "../Epargne/Epargne";
import Unblock from "../BlockPPl/Unblock";
import DeleteAccount from "../DeleteAccount/DeleteAccount";

const SettingContent = ({ choiseParams }) => {
  if (choiseParams == "depot") {
    return <Depot />;
  }
  if (choiseParams == "retraits") {
    return <Retrait />;
  }
  if (choiseParams == "epargne") {
    return <Epargne />;
  }
  if (choiseParams == "unblock") {
    return <Unblock />;
  }
  if (choiseParams == "delete") {
    return <DeleteAccount />;
  }
  return (
    <div>
      <h4>parametre veillez choisir parmis nos differentes parametres</h4>
    </div>
  );
};

export default SettingContent;
