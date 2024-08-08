import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./LogReg.css";
import { RegisterAdmin } from "../../utils/axiosUtils/AxiosLogics";
import { SetToLocalStorage } from "../../utils/localStorageManip/localStorageManip";
import Carte from "../../components/carteImgRight/Carte";

const Register = () => {
  const [name, setName] = useState("");
  const [passwords, setPasswords] = useState("");
  const [rootPassword, setRootPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const registerFunc = async (e) => {
    e.preventDefault();
    try {
      const values = { name, passwords, root: rootPassword };
      const { data } = await RegisterAdmin(values);
      setName("");
      setPasswords("");
      setRootPassword("");
      SetToLocalStorage("token", data.token);
      setRedirect(true);
    } catch (error) {
      console.log(error);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <div className="LoginReg">
        <h2>REGISTER</h2>
        <form onSubmit={registerFunc}>
          <p> nom</p>
          <input
            type="text"
            placeholder="votre nom d'admin"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p>votre mots de passe</p>
          <input
            type="password"
            name="simplePassword"
            id="simplePassword"
            placeholder="votre mots de passe"
            value={passwords}
            onChange={(e) => {
              setPasswords(e.target.value);
            }}
          />
          <p>Le mots de passe de creation de compte ?</p>
          <input
            type="password"
            name="rootPassword"
            id="rootPassword"
            placeholder="Entrez le mot de passe de super utilisateur"
            value={rootPassword}
            onChange={(e) => {
              setRootPassword(e.target.value);
            }}
          />
          <button type="submit">S'inscrire</button>
        </form>
        vous avez deja un compte ??
        <Link to="/login"> se connecter </Link>
        ou pour avoir plus d'information
        <Link to={"/more-info"}> plus d'info sur la creation de compte</Link>
      </div>
      <Carte />
    </>
  );
};

export default Register;
