import React from "react";

const Register = () => {
  return (
    <div className="LoginReg">
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
        <h3>
          pour pouvoir vous inscrire vous devrez entrez le mot de passe de super
          utilisateur
        </h3>
        <input
          type="password"
          name="rootPassword"
          id="rootPassword"
          placeholder="Entrez le mot de passe de super utilisateur"
        />
      </form>
    </div>
  );    
};

export default Register;
