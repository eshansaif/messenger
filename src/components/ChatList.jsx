import React from "react";

const ChatList = ({ chats, onSelectChat }) => {
  return (
    <div className="w-full h-full overflow-y-scroll bg-gray-100 border-r border-gray-300">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className="flex items-center p-4 cursor-pointer hover:bg-gray-200"
          onClick={() => onSelectChat(chat)}
        >
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold hidden md:block">{chat.name}</h4>
            <p className="text-sm text-gray-600">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
