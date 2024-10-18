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
          Avant de procéder au transfert, veuillez vérifier attentivement les
          informations sur la personne à qui vous voulez envoyer de l'argent.
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
        <button type="submit">
          <FiCheckCircle />
        </button>
      </form>
    </div>
  );
};

export default Confirm;
