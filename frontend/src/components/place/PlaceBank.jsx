import React from "react";
import { FaLocationPin } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./PlaceBank.css";
const PlaceBank = () => {
  return (
    <div className="place">
      <Link>
        <FiExternalLink />
      </Link>
      <h2>
        les endroits ou nous sommes present
        <FaLocationPin />
      </h2>
    </div>
  );
};

export default PlaceBank;
