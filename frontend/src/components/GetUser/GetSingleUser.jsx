import React from "react";
import { useAppContext } from "../../App";

const GetSingleUser = () => {
  const { userData } = useAppContext();
  console.log("first", userData);
  return (
    <div>
      <div className="profileUser">
        <img src="" alt="" />
        AppUserName nom et prenom : nom et prenom email : EmailUSer
      </div>
    </div>
  );
};

export default GetSingleUser;
