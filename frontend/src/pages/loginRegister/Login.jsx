import React, { useEffect } from "react";
import "./log.css";
import ImageH1 from "../NotLoged/ImageH1";

const Login = () => {
  const login = async () => {
    try {
        
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // getUser();
  }, []);
  return (
    <>
      <ImageH1 />
      <div className="log">
        <h2>Se connecter</h2>
        <form action="" method="post">
          <h3>votre :</h3>
          <h4> email</h4>
          <input type="email" name="" id="" placeholder="addresse mail" />
          <h4> mots de passe pour notre application</h4>
          <input
            type="password"
            name=""
            id=""
            placeholder="votre mots de passe"
          />
          <button type="submit">Se connecter</button>
        </form>
      </div>
    </>
  );
};

export default Login;
