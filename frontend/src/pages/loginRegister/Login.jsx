import React, { useCallback, useEffect, useState } from "react";
import "./log.css";
import ImageH1 from "../NotLoged/ImageH1";
import { LoginFunc } from "../../logics/AxiosLogics/AxiosLogics";
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Login = ({ ChangeBtn }) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [cookies, setCookie] = useCookies(["initialName"]);
  const login = async (e) => {
    e.preventDefault();
    const logUser = { Email, password };
    try {
      const { data } = await LoginFunc(logUser);
      localStorage.setItem("token", data.token);
      setEmail("");
      setPassword("");
      setRedirect(true);
      console.log(cookies);
    } catch (error) {
      console.log(error);
    }
  };
  if (redirect) {
    return <Navigate to="/home" />;
  }
  return (
    <>
      <ImageH1 />
      <div className="log">
        <h2>Se connecter</h2>
        <form onSubmit={login}>
          <h3>votre :</h3>
          <h4> email</h4>
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            name="email"
            id="email"
            placeholder="addresse mail"
          />
          <h4> mots de passe pour notre application</h4>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="votre mots de passe"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={ChangeBtn}>
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
