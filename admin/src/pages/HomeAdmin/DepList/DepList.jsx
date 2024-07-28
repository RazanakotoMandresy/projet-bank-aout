import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiCreditCard } from "react-icons/fi";
import { GetBanksList } from "../../../utils/axiosUtils/AxiosLogics";
import { Authentified } from "../../../utils/auth/Auth";
const DepList = () => {
  const [depList, setDepList] = useState([]);
  const GetBanks = async () => {
    try {
      const { data } = await GetBanksList(Authentified);
      setDepList(data.res);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetBanks();
  }, []);
  return (
    <div>
      <div className="allMyDep">
        <ul>
          <h2>les gab sous votre responsabilite</h2>
          {depList.map((list) => {
            return (
              <li key={list.ID}>
                <Link to={`/${list.ID}`}>
                  lieux : {list.Lieux} argent {list.Money}
                  <label>
                    <FiCreditCard />
                  </label>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DepList;
