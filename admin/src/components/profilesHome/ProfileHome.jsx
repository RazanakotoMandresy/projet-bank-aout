import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { GetAdminInfo } from "../../utils/axiosUtils/AxiosLogics";
import { Authentified } from "../../utils/auth/Auth";
const ProfileHome = ({ open }) => {
  const [admin, setAdmin] = useState({});
  const getAdminInfo = async () => {
    try {
      const { data } = await GetAdminInfo(Authentified);
      setAdmin(data.res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdminInfo();
  }, []);
  return (
    <div>
      <div className="AdminProfile">
        <img src="carte-credit.png" alt="" />
        <h2>name {admin.Name}</h2>
        <h3>totals send 20</h3>
      </div>
      <button className="createBank" onClick={open}>
        Cree un point de retrait et deppot ?
        <label>
          <FiPlusCircle />
        </label>
      </button>
    </div>
  );
};

export default ProfileHome;
