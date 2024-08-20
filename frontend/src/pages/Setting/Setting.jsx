import React, { useState } from "react";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import "./setting.css";

import SettingButton from "../../components/settingButtons/SettingButton";
import SettingContent from "../../components/settingContent/SettingContent";
const Setting = () => {
  const [choiseParams, setChoiseParams] = useState("");
  return (
    <>
      <HomeHeader />
      <div className="setting">
        <SettingButton setChoiseParams={setChoiseParams} />
        <div className="rightSetting">
          <SettingContent choiseParams={choiseParams} />
        </div>
      </div>
    </>
  );
};

export default Setting;
