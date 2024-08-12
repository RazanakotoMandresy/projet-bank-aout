import React from "react";
import "./warning.css";
const WarningChange = () => {
  return (
    <div className="warning">
      Vous etes sur de changer votre photos en
      <img src="defaultPP.jpg" alt="def" />
      <div className="conf">
        <button type="button" id="annuler">
          Annuler
        </button>
        <button type="submit" id="confirmer">
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default WarningChange;
