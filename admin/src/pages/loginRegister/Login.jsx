import React from "react";
import { Link } from "react-router-dom";
import "./LogReg.css";
import { SetToken } from "../../utils/localStorageManip/localStorageManip";
const Login = () => {
  const [name, setName] = useState("");
  const [passwords, setPasswords] = useState("");
  const logFunc = async (e) => {
    e.preventDefault();
    try {
      const values = { name, passwords };
      const { data } = await RegisterAdmin(values);
      setName("");
      setPasswords("");
      SetToken(data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="LoginReg">
      <h4>
        Il semble qu'il n'y ai aucun compte connecter vous pouvez vous connecter
        en remplissant le champ suivant
      </h4>
      <h2>LOGIN</h2>
      <form action="" onSubmit={logFunc}>
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
