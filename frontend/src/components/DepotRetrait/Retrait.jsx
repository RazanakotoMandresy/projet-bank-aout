// same css as for depot
import React, { useState } from "react";
import { RetaitAxios } from "../../logics/AxiosLogics/AxiosLogics";
import { Authentified } from "../../logics/authentification/authentification";

const Retrait = () => {
  const [lieux, setLieux] = useState("");
  const [values, setValue] = useState(Number);
  const [passwords, setPasswords] = useState("");
  const retait = async (e) => {
    e.preventDefault();
    try {
      const inputs = { lieux, value: values, passwords };
      await RetaitAxios(inputs, Authentified);
      setLieux("");
      setPasswords("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="depotRetrait">
      <form onSubmit={retait}>
        <h4> le lieux ou vous etes entraint de faire un retrait</h4>
        <input
          type="text"
          placeholder="entrer le lieux ou vous etes entraint de faire votre retrait"
          value={lieux}
          onChange={(e) => setLieux(e.target.value)}
        />
        <h4>valeur de que vous etes entraint de faire un retrais</h4>
        <input
          type="number"
          name="valueDep"
          id="valueDep"
          placeholder="la valeur de que vous voulez retirez"
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
        <button> confirmer </button>
      </form>
    </div>
  );
};

export default Retrait;
