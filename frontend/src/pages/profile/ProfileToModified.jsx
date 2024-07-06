import React, { useCallback, useState } from "react";
import { FiEdit, FiSave } from "react-icons/fi";
import { UpdateUserProfile } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";

const ProfileToModified = ({ userData }) => {
  const [wantModif, setWantModif] = useState(true);
  const [appUserName, setAppUserName] = useState("");
  const [residance, setResidance] = useState("");

  const updateUserInfo = async (e) => {
    e.preventDefault();
    try {
      const valueData = { AppUserName: appUserName, residance };
      const { data } = await UpdateUserProfile(
        userData.UUID,
        valueData,
        Authentified
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="formUpdate">
      {wantModif ? (
        <>
          <h3>
            {userData.AppUserName}
            <button
              type="button"
              onClick={() => {
                setWantModif(false);
              }}
            >
              <FiEdit />
            </button>
          </h3>
          <p>
            {userData.residance}
            <button
              onClick={() => {
                setWantModif(false);
              }}
            >
              <FiEdit />
            </button>
          </p>
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
          <button
            onClick={() => {
              setWantModif(true);
            }}
            type="submit"
          >
            <FiSave />
          </button>
        </form>
      )}
    </div>
  );
};

export default ProfileToModified;
