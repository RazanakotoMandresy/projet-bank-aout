import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./SearchResult.css";
import { SearchRes } from "../../logics/axios_logic/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
import { url } from "../../logics/func_logic/func";
const SearchResult = () => {
  const [user, setUser] = useState([]);
  const location = useLocation();
  //   le nom anle query ho cherchena
  const query = new URLSearchParams(location.search).get("user");
  const ResSearch = async () => {
    try {
      const { data } = await SearchRes(query, Authentified);
      setUser(data.res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ResSearch();
  }, [query]);
  return (
    <div className="searchRes">
      <ul>
        {user.map((usr) => {
          return (
            <li key={usr.UUID}>
              <Link to={`/usr/${usr.UUID}`}>
                <img src={`${url}/${usr.image}`} alt="" />
                <span>
                  {usr.AppUserName} {usr.name} {usr.firstName}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
