import React, { useEffect, useState } from "react";
import "./topSend.css";
import { GetTopTrans } from "../../utils/Axios/AxiosLogics";
import { Link } from "react-router-dom";
import { TopSendTypes } from "../../utils/types/Types";

const TopSend: React.FC = () => {
  const [topTrans, setTopTrans] = useState<Array<TopSendTypes>>([
    {
      SentByImg: "",
      SentToImg: "",
      sentTo: "",
      sommeTrans: 0,
      userName: "",
    },
  ]);
  const getTopTrans = async () => {
    try {
      const { data } = await GetTopTrans();
      setTopTrans(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("topTrans", topTrans);
  useEffect(() => {
    getTopTrans();
  }, []);
  return (
    <div className="envoyee">
      <ul>
        {topTrans?.map((usrTopInfo: TopSendTypes) => {
          return (
            <li key={usrTopInfo.sentTo}>
              <img
                src={`http://localhost:3000/${usrTopInfo.SentToImg}`}
                alt=""
              />
              <Link to={`/${usrTopInfo.sentTo}`}>
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

export default TopSend;
