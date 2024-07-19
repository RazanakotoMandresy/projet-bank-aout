import "./HomeAdmin.css";
import { Link } from "react-router-dom";
import { FiCreditCard } from "react-icons/fi";
const HomeAdmin = () => {
  return (
    <div className="HomeAdmin">
        <button
          className="createBank"
         
        >
          Cree un point de retrait et deppot ?
        </button>

        <div className="allMyDep">
          <ul>
            les gab sous votre responsabilite
            <li>
              <Link to={"/:uuid"}>
                lieux argent restant <FiCreditCard />
              </Link>
            </li>
            <li>
              <Link to={"/:uuid"}>
                lieux argent restant <FiCreditCard />
              </Link>
            </li>
            <li>
              <Link to={"/:uuid"}>
                lieux argent restant <FiCreditCard />
              </Link>
            </li>
            <li>
              <Link to={"/:uuid"}>
                lieux argent restant <FiCreditCard />
              </Link>
            </li>
            <li>
              <Link to={"/:uuid"}>
                lieux argent restant <FiCreditCard />
              </Link>
            </li>
            <li>
              <Link to={"/:uuid"}>
                lieux argent restant <FiCreditCard />
              </Link>
            </li>
            <li>
              <Link to={"/:uuid"}>
                lieux argent restant <FiCreditCard />
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default HomeAdmin;
