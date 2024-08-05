import React, { useCallback, useState } from "react";
import { AiFillWarning, AiOutlineClose } from "react-icons/ai";
import "./createBank.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const CreateBank = ({ props }) => {
  const {
    changeLieux,
    changePassword,
    changeValue,
    createBankSubmit,
    lieux,
    password,
    valeur,
    open,
  } = props;
  const [next, setNext] = useState(false);
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
              changeLieux(e);
            }}
          />
          la valeur initial accorder a la banque
          <input
            type="number"
            name="value"
            id="value"
            placeholder="Valeur"
            value={valeur}
            onChange={(e) => {
              changeValue(e);
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
                changePassword(e);
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
