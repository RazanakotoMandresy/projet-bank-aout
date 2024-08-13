import React, { useEffect, useState } from "react";
import { GetUserInfo } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
import { useParams } from "react-router-dom";
import { useAppContext } from "../../App";
import { url } from "../../logics/funLogic/func";
import "./getUser.css";
import { FiSend } from "react-icons/fi";
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
        <ul>
          <li className="send">
            <img src={`${url}/${userData.image}`} alt={userData.image} />
            <label>
              send send0 send sends send send send send sends send send send
              send sends send send send s end sends send send send
            </label>
          </li>
          <li className="receive">
            <img src={`${url}/${userFound.image}`} alt={userFound.image} />
            <label>
              re receive receivereceive receive ceiverecei vereceiver eceiverec
              eiver eceive
            </label>
          </li>
        </ul>
        <form action="">
          <input type="text" placeholder="ecriver votre message ........" />
          <button>
            <FiSend />
          </button>
        </form>
      </div>
      <div className="profileUser">
        <img src="" alt="" />
        AppUserName nom et prenom : nom et prenom email : EmailUSer
      </div>
    </div>
  );
};

export default GetSingleUser;
