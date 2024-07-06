import React from "react";
import "./profile.css";
import ImageH1 from "../NotLoged/ImageH1";
import { FiCamera } from "react-icons/fi";
const Profile = () => {
  return (
    <div className="profile">
      <div className="leftSide">
        <div className="imagePP">
          <button>
            <img src="http://localhost:5173/carte-credit.png" alt="" />
            <label>
              <FiCamera />
            </label>
          </button>
        </div>
      </div>
      <ImageH1 />
    </div>
  );
};

export default Profile;
