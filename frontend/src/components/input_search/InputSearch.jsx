// input called in navbar
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const [AppUserName, setAppUserName] = useState("");
  const nav = useNavigate();
  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Saisissez le nom d'utilisateur exact que vous recherchez"
        onChange={(e) => {
          setAppUserName(e.target.value);
        }}
      />
      <button
        className="searchBtn"
        type="button"
        onClick={() => {
          nav(`search?user=${AppUserName}`);
        }}
      >
        <BiSearch />
      </button>
    </>
  );
};

export default InputSearch;
