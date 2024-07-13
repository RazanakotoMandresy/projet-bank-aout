import React from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

const Confirm = ({ sendMoney, foundValue, value, changeShow }) => {
  return (
    <div className="surTrans">
      <button className="close" onClick={changeShow}>
        <FiXCircle />
      </button>
      <form onSubmit={sendMoney}>
        <h3>
          les informations sur le{"(a)"} personne que vous voulez envoyer de
          l'argents
        </h3>
        <p>
          <b>nom</b> :{foundValue.nameFirstName}
        </p>
        <p>
          <b>email</b> :{foundValue.Email}
        </p>
        <p>
          <b>uuid</b> :{foundValue.uuid}
        </p>
        <h3>la valeur de l'argent que vous voulez envoyer est :</h3>
        <h4>{value} ar</h4>
        <button
          type="submit"
          // onClick={ () => {
          //   changeShow();
          // }}
        >
          <FiCheckCircle />
        </button>
      </form>
    </div>
  );
};

export default Confirm;
