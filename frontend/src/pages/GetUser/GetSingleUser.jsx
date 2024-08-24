import React, { useCallback, useEffect, useState } from "react";
import {
  GetUserInfo,
  SettingAxios,
} from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../App";
import { url } from "../../logics/funLogic/func";
import "./getUser.css";
import { FiChevronDown } from "react-icons/fi";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Message from "../../components/message/Message";
const GetSingleUser = () => {
  // le params peut etre un uuid ou bien un appUserName
  const { uuid } = useParams();
  const { userData } = useAppContext();
  const [userFound, setUserFound] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [blockAcc, setBlockAcc] = useState("");
  const [unblockAcc, setUnBlock] = useState("");
  const [switchBlock, setSwitchBlock] = useState(true);
  const getSingleUserFunc = async () => {
    setIsLoading(true);
    try {
      const { data } = await GetUserInfo(uuid, Authentified);
      setUserFound(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const blockUnblockPPl = async () => {
    try {
      const inputs = { blockAcc, unblockAcc };
      await SettingAxios(inputs, Authentified);
      console.log(blockAcc);
    } catch (error) {
      console.log(error);
    }
  };
  const blockFunc = () => {
    setBlockAcc(userFound.AppUserName);
    blockUnblockPPl();
    // setSwitchBlock(!switchBlock);
  };
  const unblockFunc = () => {
    setUnBlock(userFound.AppUserName);
    blockUnblockPPl();
    // setSwitchBlock(!switchBlock);
  };
  useEffect(() => {
    getSingleUserFunc();
  }, [uuid]);

  // TODO Loading implementation
  return (
    <>
      <HomeHeader />
      <div className="user">
        <Message userData={userData} userFound={userFound} uuid={uuid} />
        <div className="profileUser">
          <img src={`${url}/${userFound.image}`} alt={userFound.image} />
          <h3>{userFound.AppUserName} </h3>
          <h4>{userFound.nameFirstName}</h4>
          <h4>TOTals de votre transaction avec : 400000ar</h4>
          {switchBlock ? (
            <button
              onClick={blockFunc}
              onDoubleClick={() => {
                setSwitchBlock(!switchBlock);
              }}
            >
              bloquer
            </button>
          ) : (
            <button
              onClick={unblockFunc}
              onDoubleClick={() => {
                setSwitchBlock(!switchBlock);
              }}
            >
              Debloquer
            </button>
          )}
          <button className="more">
            <FiChevronDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default GetSingleUser;
