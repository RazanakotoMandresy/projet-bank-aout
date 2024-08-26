import React, { useEffect, useState } from "react";
import { url } from "../../logics/funLogic/func";
import { BiSend } from "react-icons/bi";
const Message = ({
  userData,
  userFound,
  uuid,
  allMessages,
  setAllMessages,
}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState(null);
  // const [allMsg, setAllMsg] = useState(allMessages);
  // console.log("me", allMsg);
  useEffect(() => {
    const socket = new WebSocket(
      `ws://localhost:3000/api/v1/chat/ws/${uuid}?token=${localStorage.getItem(
        "token"
      )}`
    );
    setWs(socket);
    socket.onmessage = (event) => {
      // console.log("evee", event)
      setMessages((prevMsg) => [...prevMsg, event.data]);
      // setAllMessages((prevMsg) => [...prevMsg, event.data]);
    };
    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws) {
      ws.send(input);
      setInput("");
    }
  };
  return (
    <div className="message">
      <h4> {userFound.AppUserName}</h4>
      <ul>
        {allMessages.map((msg) => {
          return (
            <li className="send" key={msg.ID}>
              <label>
                <img src={`${url}/${userData.image}`} alt={userData.image} />
                {msg.Content}
              </label>
            </li>
          );
        })}
        {/* message on socket provisoire  ftsn */}
        {messages.map((msg, index) => {
          return (
            <li className="send" key={index}>
              <label>
                <img src={`${url}/${userData.image}`} alt={userData.image} />
                {msg}
              </label>
            </li>
          );
        })}

        <li className="receive">
          <label>
            <img src={`${url}/${userFound.image}`} alt={userFound.image} />
            Bonjour, je n'ai malheureusement pas la possibilité d'envoyer cette
            somme aujourd'hui. Mais peut-être demain.
          </label>
        </li>
        {/* TODO tsy mety le reponse  */}
      </ul>
      <div className="champ">
        <input
          type="text"
          placeholder="ecriver votre message ........"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>
          <BiSend />
        </button>
      </div>
    </div>
  );
};

export default Message;
