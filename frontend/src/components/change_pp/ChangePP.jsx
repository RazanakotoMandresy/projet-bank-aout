import React, { useState } from "react";
import { PostPPfunc } from "../../logics/axios_logic/AxiosLogics";
import { AuthentifiedMultipart } from "../../logics/authentification/authentification";
import { FiCamera } from "react-icons/fi";
import WarningChange from "./WarningChange";

const ChangePP = ({ userData }) => {
  const [profilePicts, setProfilePicts] = useState("");
  const [confirm, setConfirm] = useState(false);
  const postPP = async (e) => {
    try {
      const value = {
        filePP: profilePicts[0],
      };
      await PostPPfunc(value, AuthentifiedMultipart);
    } catch (error) {
      console.log("err", error);
    }
  };
  return (
    <form onSubmit={postPP} className="formPP">
      <label htmlFor="files">
        <img src={`http://localhost:3000/${userData.image}`} alt={userData.image} />
        <FiCamera />
        <input
          id="files"
          type="file"
          name="file"
          onChange={(e) => {
            setProfilePicts(e.target.files);
            setConfirm(!confirm);
          }}
          accept=".jpg , .png"
          autoSave=""
        />
      </label>
      {confirm ? <WarningChange /> : <></>}
    </form>
  );
};

export default ChangePP;
