import React, { useEffect, useState } from "react";
import { GetUserInfo } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../App";
import { url } from "../../logics/funLogic/func";
import "./getUser.css";
import { FiChevronDown, FiSend } from "react-icons/fi";
const GetSingleUser = () => {
  // le params peut etre un uuid ou bien un appUserName
  const { uuid } = useParams();
  const { userData } = useAppContext();
  const [userFound, setUserFound] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getSingleUserFunc = async () => {
    setIsLoading(true);
    try {
      const { data } = await GetUserInfo(uuid, Authentified);
      console.log(data);
      setUserFound(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleUserFunc();
  }, [uuid]);
  // TODO Loading implementation
  // if (isLoading) {
  //   return (
  //     <h1>
  //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
  //       repellendus error reiciendis temporibus voluptatibus omnis repudiandae,
  //       vitae sapiente ducimus fugit, nihil ad tenetur voluptate provident modi
  //       aliquid, iste deleniti. Odio?
  //     </h1>
  //   );
  // }
  return (
    <div className="user">
      <div className="message">
        <h4>Name name</h4>
        <ul>
          <li className="send">
            <label>
              <img src={`${url}/${userData.image}`} alt={userData.image} />
              Bonjour , vous pouvez m'envoyez 18.000ar s'il vous plait j'en
              aurais besoin cet apres midi
            </label>
          </li>
          <li className="receive">
            <label>
              <img src={`${url}/${userFound.image}`} alt={userFound.image} />
              Bonjour , je n'ai pas la possibliter d'envoyez cet somme ; mais
              demain peut etre
            </label>
          </li>
          {/* TODO tsy mety le reponse  */}
        </ul>
        <form action="">
          <input type="text" placeholder="ecriver votre message ........" />
          <button>
            <FiSend />
          </button>
        </form>
      </div>
      <div className="profileUser">
        <img src={`${url}/${userFound.image}`} alt={userFound.image} />
        <h3>AppUser Name : appUserName </h3>
        <h4>FirstName Lstnam</h4>
        <h4>TOTals de votre transaction avec : 400000ar</h4>
        <button className="more">
          <FiChevronDown />
        </button>
      </div>
    </div>
  );
};

export default GetSingleUser;
