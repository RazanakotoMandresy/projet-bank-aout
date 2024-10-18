import React, { useEffect, useState } from "react";
import { CgUnblock } from "react-icons/cg";
import { ChangeState } from "../../logics/localstorage/LocalstorageLog";
const Unblock = ({ userData, SettingUser, setUnBlockAccount }) => {
  const [blockList, setBlockList] = useState([]);
  const blockListFunc = async () => {
    try {
      setBlockList(userData.BlockedAcc);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    blockListFunc();
  }, []);
  return (
    <div className="block">
      <h4>listes des personnes que vous avez bloquer</h4>
      <ul>
        {blockList?.map((name) => {
          return (
            <li key={name}>
              {name}
              <button
                onClick={() => {
                  setUnBlockAccount(name);
                  SettingUser();
                  ChangeState();
                }}
              >
                debloquer
                <CgUnblock />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Unblock;
