//home admin mahazo dashbord mialy genre graphe,nb user
import React from "react";
import "./HomeAdmin.css";
import { Link } from "react-router-dom";
const HomeAdmin = () => {
  return (
    <div>
      <buton className="createBank">Cree un point de retrait et deppot ?</buton>
      <div className="allMyDep">
        <ul>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
          <li>
            <Link to={"/:uuid"}>lieux</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeAdmin;
