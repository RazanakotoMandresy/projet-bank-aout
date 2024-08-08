import React, {  useState } from "react";
import { FiEdit, FiSave } from "react-icons/fi";
import { UpdateUserProfile } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";

const ProfileToModified = ({ userData }) => {
  const [wantModif, setWantModif] = useState(true);
  const [appUserName, setAppUserName] = useState(userData.AppUserName);
  const [residance, setResidance] = useState(userData.residance);
  const updateUserInfo = async (e) => {
    e.preventDefault();
    try {
      const valueData = { AppUserName: appUserName, Residance: residance };
      const { data } = await UpdateUserProfile(valueData, Authentified);
      console.log(data);
      setWantModif(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="formUpdate">
      {wantModif ? (
        <>
          <button
            type="button"
            onClick={() => {
              setWantModif(false);
            }}
          >
            <h3>
              {userData.AppUserName}
              <FiEdit />
            </h3>
          </button>
          <button
            onClick={() => {
              setWantModif(false);
            }}
          >
            {userData.residance}
            <FiEdit />
          </button>
        </>
      ) : (
        <form onSubmit={updateUserInfo}>
          <input
            type="text"
            name="modifAppUserName"
            id="modifAppUserName"
            value={appUserName}
            onChange={(e) => {
              setAppUserName(e.target.value);
            }}
            placeholder={`${userData.AppUserName}`}
          />
          <input
            type="text"
            name="modifResidance"
            id="modifResidance"
            placeholder={`${userData.residance}`}
            value={residance}
            onChange={(e) => {
              setResidance(e.target.value);
            }}
          />
          <button>
            <FiSave />
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfileToModified;
