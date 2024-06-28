import React, { useState } from "react";
import ImageH1 from "../NotLoged/ImageH1";
import "./log.css";
import InitialLog from "./LogInput/InitialLog";
import NextLog from "./LogInput/NextLog";
const Register = () => {
  const [suivant, setSuivant] = useState(true);
  return (
    <>
      <ImageH1 />
      <div className="log">
        <h2>Inscription</h2>
        <form action="" method="post">
          {suivant ? <InitialLog /> : <NextLog />}
          <button type="button" onClick={() => setSuivant(!suivant)}>
            {suivant ? <> suivant </> : <> precedent </>}
          </button>
          {suivant ? <></> : <button> s'inscrire</button>}
        </form>
      </div>
    </>
  );
};

export default Register;
