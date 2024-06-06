import React from "react";
import Message from "./Message";

const ChatWindow = ({ chat }) => {
  return (
    <div className="flex-1 p-4 bg-gray-50 overflow-y-auto flex flex-col">
      {chat.messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
};

export default ChatWindow;
