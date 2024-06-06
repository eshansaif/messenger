import React from "react";

const Message = ({ message }) => {
  return (
    <div
      className={`my-2 p-3 rounded-lg max-w-xs ${
        message.sender === "me"
          ? "bg-blue-500 text-white self-end ml-auto"
          : "bg-gray-300 text-black self-start mr-auto"
      }`}
    >
      <p>{message.text}</p>
    </div>
  );
};

export default Message;
