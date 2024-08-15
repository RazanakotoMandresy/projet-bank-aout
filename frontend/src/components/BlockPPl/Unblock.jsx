import React from "react";
import { CgUnblock } from "react-icons/cg";

const Unblock = () => {
  return (
    <div className="block">
      <h4>listes des personnes que vous avez bloquer</h4>
      <ul>
        <li>
          Mandresy_Diary
          <button>
            debloquer
            <CgUnblock />
          </button>
        </li>
        <li>
          Rakoto45
          <button>
            debloquer
            <CgUnblock />
          </button>
        </li>
        <li>
          ELie_Jao
          <button>
            debloquer
            <CgUnblock />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Unblock;
