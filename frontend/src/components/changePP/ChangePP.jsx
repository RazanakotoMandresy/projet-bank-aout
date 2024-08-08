import React, { useState } from "react";
import { PostPPfunc } from "../../logics/AxiosLogics/AxiosLogics";
import { AuthentifiedMultipart } from "../../logics/authentification/authentification";
import { FiCamera } from "react-icons/fi";
import WarningChange from "./WarningChange";

const ChangePP = ({ profilePict }) => {
  const [profilePicts, setProfilePicts] = useState("");
  const [confirm, setConfirm] = useState(false);
  const postPP = async () => {
    try {
      const value = {
        filePP: profilePicts[0],
      };
      const { data } = await PostPPfunc(value, AuthentifiedMultipart);
      console.log(data);
    } catch (error) {
      console.log("err", error);
    }
  };
  return (
      <form onSubmit={postPP} className="formPP">
        <label htmlFor="files">
          <img src={profilePict} alt={profilePict} />
          <FiCamera />
          <input
            id="files"
            type="file"
            name="file"
            onChange={(e) => {
              setProfilePicts(e.target.files);
              setConfirm(!confirm)
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
