import React, { useState } from "react";
import "./depot.css";
import { DepotAxios } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";
import Errors from "../errors/Errors";
const Depot = () => {
  const [lieux, setLieux] = useState("");
  const [values, setValue] = useState(Number);
  const [passwords, setPasswords] = useState("");
  const [error, setError] = useState("");
  const depot = async (e) => {
    e.preventDefault();
    try {
      const inputs = { lieux, value: values, passwords };
      await DepotAxios(inputs, Authentified);
      setLieux("");
      setValue(0);
      setPasswords("");
    } catch (error) {
      setError(error?.response?.data?.err);
      console.log(error);
    }
  };
  return (
    <div className="depotRetrait">
      <form onSubmit={depot}>
        <h4>
          le lieux ou vous etes entraint de faire un depot la referance de votre
          lieux actuel est inscrit sur le gab
        </h4>
        <input
          type="text"
          placeholder="entrer le lieux ou vous etes entraint de faire "
          value={lieux}
          onChange={(e) => setLieux(e.target.value)}
        />
        <h4>valeur de que vous etes entraint de faire un depot</h4>
        <input
          type="number"
          name="valueDep"
          id="valueDep"
          placeholder="la valeur de que vous etes entraint de faire un depot"
          value={values}
          onChange={(e) => setValue(e.target.valueAsNumber)}
        />
        <h4>votre mots de passes</h4>
        <input
          type="password"
          name="numbPass"
          id="numbPas"
          placeholder="votre mots de passes"
          value={passwords}
          onChange={(e) => setPasswords(e.target.value)}
        />
        <Errors error={error} />
        <button type="submit">confirmer</button>
      </form>
    </div>
  );
};

export default Depot;
