import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LogReg.css";
import { RegisterAdmin } from "../../utils/axiosUtils/AxiosLogics";
import { SetToken } from "../../utils/localStorageManip/localStorageManip";

const Register = () => {
  const [name, setName] = useState("");
  const [passwords, setPasswords] = useState("");
  const [rootPassword, setRootPassword] = useState("");
  const registerFunc = async (e) => {
    e.preventDefault();
    try {
      const values = { name, passwords, root: rootPassword };
      const { data } = await RegisterAdmin(values);
      setName("");
      setPasswords("");
      setRootPassword("");
      SetToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
        <p>
          pour pouvoir vous inscrire vous devrez entrez le mot de passe de super
          utilisateur
        </p>
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
        <button type="submit">Se connecter</button>
      </form>
      vous avez deja un compte ??
      <Link to="/login"> s'inscrire</Link>
      ou pour avoir plus d'information
      <Link to={"/more-info"}> plus d'info sur la creation de compte</Link>
    </div>
  );
};

export default Register;
