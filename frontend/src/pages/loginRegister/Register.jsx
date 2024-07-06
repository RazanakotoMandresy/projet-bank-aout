import React, { useState } from "react";
import ImageH1 from "../NotLoged/ImageH1";
import "./log.css";
import { RegisterFunc } from "../../logics/AxiosLogics/AxiosLogics";

import { Navigate } from "react-router-dom";
const Register = () => {
  const [suivant, setSuivant] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [residance, setResidance] = useState("");
  const [AppUserName, setAppUserName] = useState("");
  const [password, setPasswords] = useState("");
  const [naissance, setNaissance] = useState("");
  const [redirect, setRedirect] = useState(false);

  const registerSubmit = async (e) => {
    e.preventDefault();
    const register = {
      firstName,
      name,
      Email,
      residance,
      AppUserName,
      password,
      naissance,
    };
    try {
      const { data } = await RegisterFunc(register);
      localStorage.setItem("token", data.token);
      setRedirect(true);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <ImageH1 />
      <div className="log">
        <h2>Inscription</h2>
        <form onSubmit={registerSubmit}>
          {suivant ? (
            <>
              <h3>votre :</h3>
              <h4>Nom</h4>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="votre nom"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <h4> prenom</h4>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="votre prenom"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <h4> email</h4>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="votre addresse email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </>
          ) : (
            <>
              <h4> date de naissance</h4>
              <input
                type="date"
                name="naissance"
                id="naissance"
                value={naissance}
                onChange={(e) => {
                  setNaissance(e.target.value);
                }}
              />
              <h4> lieux de residance</h4>
              <input
                type="text"
                name="residance"
                id="residance"
                placeholder="votre lieux de residance"
                value={residance}
                onChange={(e) => {
                  setResidance(e.target.value);
                }}
              />
              <h4> mots de passe pour notre application</h4>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="votre nots de passe"
                value={password}
                onChange={(e) => {
                  setPasswords(e.target.value);
                }}
              />
              <h4>pseudo sur l'app</h4>
              <input
                type="text"
                name="AppUserName"
                id="AppUserName"
                placeholder="votre pseudo sur l'app"
                value={AppUserName}
                onChange={(e) => {
                  setAppUserName(e.target.value);
                }}
              />
            </>
          )}
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
