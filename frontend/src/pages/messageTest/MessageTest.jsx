import React, { useEffect, useState } from "react";
import "./msg.css";
import { Authentified } from "../../logics/authentification/authentification";
const MessageTest = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(
      `ws://localhost:3000/api/v1/chat/ws?token=${localStorage.getItem(
        "token"
      )}`
    );
    setWs(socket);

    socket.onmessage = (event) => {
      setMessages((prevMessages) => [...prevMessages, event.data]);
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
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default MessageTest;
