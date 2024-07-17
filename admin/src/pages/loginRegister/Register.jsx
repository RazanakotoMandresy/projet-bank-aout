import React from "react";
import { Link } from "react-router-dom";
import "./LogReg.css";

const Register = () => {
  return (
    <div className="LoginReg">
      <h2>REGISTER</h2>
      <form action="">
        <p> nom</p>
        <input type="text" placeholder="votre nom d'admin" />
        <p>votre mots de passe</p>
        <input
          type="password"
          name="simplePassword"
          id="simplePassword"
          placeholder="votre mots de passe"
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
