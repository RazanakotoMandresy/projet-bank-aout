import React from "react";
import "./Sur.css";
// misy params manidy sy manokatra
// TODO Atao rehefa mila confirmation
const Sur = () => {
  return (
    <div className="sur">
      <div className="close">X</div>
      <h3>Vous etes sur de bla vla bla</h3>
      <button>Confirmer</button>
      <button className="annuler">Annuler </button>
    </div>
  );
};

export default Sur;
