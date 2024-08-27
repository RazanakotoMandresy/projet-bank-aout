import React, { useEffect, useState } from "react";
import {
  GetAllMessages,
  GetUserInfo,
  ReciveAllMessages,
  SettingAxios,
} from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../App";
import { url } from "../../logics/funLogic/func";
import "./getUser.css";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import Message from "../../components/message/Message";
import Errors from "../../components/error/Errors";
const GetSingleUser = () => {
  // le params peut etre un uuid ou bien un appUserName
  const { uuid } = useParams();
  const { userData } = useAppContext();
  const [userFound, setUserFound] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // TODO Loading but after the
  const [blockAcc, setBlockAcc] = useState("");
  const [unblockAcc, setUnBlock] = useState("");
  const [switchBlock, setSwitchBlock] = useState(true);
  const [allMessages, setAllMessages] = useState([]);
  const [receiveAllMgs, setReceiveAllMsgs] = useState([]);
  const [error, setError] = useState("");
  const getSingleUserFunc = async () => {
    // setIsLoading(true);
    try {
      const { data } = await GetUserInfo(uuid, Authentified);
      setUserFound(data);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.err);
    }
  };
  const blockUnblockPPl = async () => {
    try {
      const inputs = { blockAcc, unblockAcc };
      await SettingAxios(inputs, Authentified);
      console.log(blockAcc);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data?.err);
    }
  };
  const blockFunc = () => {
    setBlockAcc(userFound.AppUserName);
    blockUnblockPPl();
  };
  const unblockFunc = () => {
    setUnBlock(userFound.AppUserName);
    blockUnblockPPl();
  };
  const getAllMessages = async () => {
    try {
      const { data } = await GetAllMessages(uuid, Authentified);
      setAllMessages(data);
    } catch (error) {
      console.log(error);
      setError(error?.response?.data);
    }
  };
  const receiveAllMessages = async () => {
    try {
      const { data } = await ReciveAllMessages(uuid, Authentified);
      setReceiveAllMsgs(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSingleUserFunc();
    getAllMessages();
    receiveAllMessages();
  }, [uuid]);

  // TODO Loading implementation
  return (
    <>
      <HomeHeader />
      <div className="user">
        <Message
          userData={userData}
          userFound={userFound}
          uuid={uuid}
          allMessages={allMessages}
          setAllMessages={setAllMessages}
          receiveAllMsgs={receiveAllMgs}
          setReceiveAllMsgs={setReceiveAllMsgs}
        />
        <div className="profileUser">
          <img src={`${url}/${userFound.image}`} alt={userFound.image} />
          <h3>{userFound.AppUserName} </h3>
          <h4>{userFound.nameFirstName}</h4>
          <h4>total de votre transaction avec : {userFound.total}</h4>
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
          <Errors error={error} />
          {/* abondon */}
          {/* <button className="more">
            <FiChevronDown />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default GetSingleUser;
