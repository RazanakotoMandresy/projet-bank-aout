import React from "react";
import "./warning.css";
const WarningChange = () => {
  return (
    <div className="warning">
      Vous etes sur de changer votre photos de profil?
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
