import React, { useState } from "react";
import HomeHeader from "../../components/home_header/HomeHeader";
import "./setting.css";
import SettingButton from "../../components/setting_options/SettingButton";
import SettingContent from "../../components/setting_content/SettingContent";
import { GetSettingState } from "../../logics/localstorage/LocalstorageLog";
import { useAppContext } from "../../App";
import { SettingAxios } from "../../logics/axios_logic/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
const Setting = () => {
  const [choiseParams, setChoiseParams] = useState(GetSettingState);
  const { userData } = useAppContext();
  const [removeAllEp, setRemoveAllEp] = useState(false);
  const [deleteMyAcc, setDelMyAcc] = useState(false);
  const [blockAccount, setBlockAccount] = useState("");
  const [unblockAccount, setUnBlockAccount] = useState("");
  const SettingUser = () => {
    try {
      const inputs = {
        rmEpargne: removeAllEp,
        rmAccount: deleteMyAcc,
        unblockAcc: unblockAccount,
        blockAcc: blockAccount,
      };
      const { data } = SettingAxios(inputs, Authentified);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const SettingProps = {
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
  };
  return (
    <>
      <HomeHeader />
      <div className="setting">
        <SettingButton setChoiseParams={setChoiseParams} />
        <div className="rightSetting">
          <SettingContent props={SettingProps} />
        </div>
      </div>
    </>
  );
};

export default Setting;
