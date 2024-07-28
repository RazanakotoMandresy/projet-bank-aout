import React, { useCallback, useState } from "react";
import { AiFillWarning, AiOutlineClose } from "react-icons/ai";
import "./createBank.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CreateBankAxios } from "../../utils/axiosUtils/AxiosLogics";
import { Authentified } from "../../utils/auth/Auth";
const CreateBank = ({ open }) => {
  const [lieux, setLieux] = useState("");
  const [valeur, setValeur] = useState(1);
  const [password, setPassword] = useState("");
  const [next, setNext] = useState(false);
  const createBankSubmit = async (e) => {
    e.preventDefault();
    try {
      const value = { lieux, money: valeur, password };
      const { data } = await CreateBankAxios(value, Authentified);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeNexts = useCallback(() => {
    setNext(!next);
  }, [next]);
  return (
    <div className="createB">
      <button className="close" onClick={open}>
        <AiOutlineClose />
      </button>

      <h4>creation d'un banque</h4>
      {next ? (
        <></>
      ) : (
        <>
          <h4 className="warning">
            Notes!!! <AiFillWarning />: il est tres important de bien avoir
            conscience de ce que vous allez faire sur cette fonctionnaliter ,
            des mauvaise manipulation peut mener a des sanctions penales
          </h4>
          le lieux precis ou se trouve la banque
          <input
            type="text"
            name="lieux"
            id="lieux"
            placeholder="lieux"
            value={lieux}
            onChange={(e) => {
              setLieux(e.target.value);
            }}
          />
          la valeur initial accorder a la banque
          <input
            type="text"
            name="value"
            id="value"
            placeholder="Valeur"
            value={valeur}
            onChange={(e) => {
              setValeur(e.target.value);
            }}
          />
          <button onClick={changeNexts}>
            suivant <FiChevronRight />
          </button>
        </>
      )}

      {next ? (
        <>
          <button className="prev" onClick={changeNexts}>
            <FiChevronLeft />
          </button>
          <form action="" onSubmit={createBankSubmit}>
            votre mots de passe d'admin
            <input
              type="password"
              name="password"
              id="password"
              placeholder="mots de passe"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">cree </button>
          </form>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CreateBank;
