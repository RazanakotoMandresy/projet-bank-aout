import React from "react";
import { Link } from "react-router-dom";
import "./LogReg.css";
const Login = () => {
  return (
    <div className="LoginReg">
      <h4>
        Il semble qu'il n'y ai aucun compte connecter vous pouvez vous connecter
        en remplissant le champ suivant
      </h4>
      <h2>LOGIN</h2>
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
        <button type="submit">Se connecter</button>
      </form>
      Pas encore de comptes? allez demandez l'access a la creation dans nos
      point principales puis appuyer sur
      <Link to="/register"> s'inscrire</Link>
      ou pour avoir plus d'information
      <Link to={"/more-info"}> plus d'info sur la creation de compte</Link>
    </div>
  );
};

export default Login;
