import DepList from "./DepList/DepList";
import { useCallback, useEffect, useState } from "react";
import CreateBank from "../../components/createBank/CreateBank";
import "./HomeAdmin.css";
import {
  CreateBankAxios,
  GetBanksList,
} from "../../utils/axiosUtils/AxiosLogics";
import { Authentified } from "../../utils/auth/Auth";
import ProfileHome from "../../components/profilesHome/ProfileHome";

const HomeAdmin = () => {
  const [createbank, setCreatebank] = useState(false);
  const [depList, setDepList] = useState([]);
  const [lieux, setLieux] = useState("");
  const [valeur, setValeur] = useState(1);
  const [password, setPassword] = useState("");

  const GetBanks = useCallback(async () => {
    try {
      const { data } = await GetBanksList(Authentified);
      setDepList(data.res);
    } catch (error) {
      console.log(error);
    }
  }, [depList]);
  const createBankSubmit = async (e) => {
    e.preventDefault();
    try {
      const value = { lieux, money: valeur, password };
      await CreateBankAxios(value, Authentified);
      const inputValues = { Lieux: lieux, Money: valeur };
      const newElem = [...depList, inputValues];
      setDepList(newElem);
      setLieux("");
      setValeur("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };
  const changeLieux = (e) => {
    setLieux(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeValue = (e) => {
    setValeur(e.target.valueAsNumber);
  };
  const open = useCallback(() => {
    setCreatebank(!createbank);
  }, [createbank]);
  const props = {
    changeLieux,
    changePassword,
    changeValue,
    createBankSubmit,
    lieux,
    password,
    valeur,
    open,
  };
  useEffect(() => {
    GetBanks();
  }, []);
  return (
    <div className="HomeAdmin">
      <ProfileHome open={open} />
      {createbank ? <CreateBank props={props} /> : <></>}
      <DepList depList={depList} />
    </div>
  );
};

export default HomeAdmin;
