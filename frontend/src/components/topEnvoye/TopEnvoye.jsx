import React, { useEffect, useState } from "react";
import "./topEnvoyer.css";
import { Link } from "react-router-dom";
import { GetTopTrans } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
const TopEnvoye = () => {
  const [topTrans, setTopTrans] = useState([]);

  const getTopTrans = async () => {
    try {
      const { data } = await GetTopTrans(Authentified);
      console.log(data);
      setTopTrans(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopTrans();
  }, []);
  return (
    <div className="envoyee">
      <ul>
        {topTrans.map((usrTopInfo) => {
          return (
            <li key={usrTopInfo.sentTo}>
              {console.log(usrTopInfo)}
              <img
                src={`http://localhost:3000/${usrTopInfo.SentToImg}`}
                alt=""
              />
              <Link>
                <h2>{usrTopInfo.userName}</h2>
              </Link>
              <h3>
                Le total dev votre transaction avec et {usrTopInfo.sommeTrans}
                ar
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopEnvoye;
