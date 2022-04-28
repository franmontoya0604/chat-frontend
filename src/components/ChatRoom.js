import React, { useState } from "react";
import useInitialState from "../hooks/useInitialState";
import ChatMessage from "./ChatMessage";
import "./styles/chatRoom.css";

const ChatRoom = () => {
  const [formValue, setFormValue] = useState("");

  const { addMessage, messages, currentId } = useInitialState();

  const sendMessage = async (e) => {
    e.preventDefault();

    await addMessage(formValue);

    setFormValue("");
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((message) => (
            <ChatMessage
              key={message._id}
              message={message}
              currentId={currentId}
            />
          ))}
      </main>

      <form onSubmit={sendMessage} className="container form-message">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          required
          placeholder="say something nice"
        />

        <button type="submit" disabled={!formValue}>
          <i className="fa-solid fa-paper-plane "></i>
        </button>
      </form>
    </>
  );
};

export default ChatRoom;
