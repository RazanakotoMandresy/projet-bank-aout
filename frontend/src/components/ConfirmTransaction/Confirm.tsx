import React from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { UserToSendType } from "../../utils/types/Types";
// juste le types des props
type Porps = {
  sendMoney: (e: React.FormEvent) => Promise<void>;
  userSendFound: UserToSendType;
  value: number;
  setSure: React.Dispatch<React.SetStateAction<boolean>>;
};
const Confirm: React.FC<Porps> = ({
  sendMoney,
  userSendFound,
  value,
  setSure,
}) => {
  return (
    <div className="surTrans">
      <button className="close" onClick={() => setSure(false)}>
        <FiXCircle />
      </button>
      <form onSubmit={sendMoney}>
        <h3>
          les informations sur le{"(a)"} personne que vous voulez envoyer de
          l'argents
        </h3>
        <p>
          <b>nom</b> :{userSendFound.nameFirstName}
        </p>
        <p>
          <b>email</b> :{userSendFound.Email}
        </p>
        <p>
          <b>uuid</b> :{userSendFound.uuid}
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
