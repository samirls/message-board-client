import "./sendMessage.css";
import { useState } from "react";
import axios from "axios";

function SendMessage({setData}) {
  const [authorText, setAuthorText] = useState("");
  const [messageText, setMessageText] = useState("");

  const addMessageToDatabase = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/new",
        {
          user: authorText,
          message: messageText,
        }
      );
      setData((prev) => [...prev, res.data]);
      setAuthorText("");
      setMessageText("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="homeInputContainer" onSubmit={(e) => addMessageToDatabase(e)}>
      <input
        required
        className="authorInput"
        autoFocus
        placeholder="Write your nickname"
        onChange={(e) => {
          setAuthorText(e.target.value);
        }}
        value={authorText}
      />
      <input 
        required 
        className="messageInput" 
        placeholder="Write a message"
        onChange={(e) => {
          setMessageText(e.target.value);
        }}
        value={messageText}
      />
      <button className="formSend" type="submit">Send</button>
    </form>
  );
}

export default SendMessage;
