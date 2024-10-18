import React from "react";
import Depot from "../depot_retrait/Depot";
import Retrait from "../depot_retrait/Retrait";
import Unblock from "../block_ppl/Unblock";
import DeleteAccount from "../delete_account/DeleteAccount";

const SettingContent = ({ props }) => {
  const {
    removeAllEp,
    deleteMyAcc,
    blockAccount,
    unblockAccount,
    userData,
    choiseParams,
    SettingUser,
    setRemoveAllEp,
    setDelMyAcc,
    setBlockAccount,
    setUnBlockAccount,
  } = props;
  if (choiseParams == "depot") {
    return <Depot />;
  }
  if (choiseParams == "retraits") {
    return <Retrait />;
  } 
  if (choiseParams == "unblock") {
    return (
      <Unblock
        userData={userData}
        setUnBlockAccount={setUnBlockAccount}
        unblockAccount={unblockAccount}
        SettingUser={SettingUser}
      />
    );
  }
  if (choiseParams == "delete") {
    return (
      <DeleteAccount
        userData={userData}
        SettingUser={SettingUser}
        setDelMyAcc={setDelMyAcc}
        deleteMyAcc={deleteMyAcc}
      />
    );
  }
  return (
    <div>
      <h4>parametre veillez choisir parmis nos differentes parametres</h4>
    </div>
  );
};

export default SettingContent;
