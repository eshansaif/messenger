import React, { useState } from "react";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "John Doe",
      avatar: "path/to/avatar.jpg",
      lastMessage: "Hey there!",
      messages: [
        { sender: "John", text: "Hey there!" },
        { sender: "me", text: "Hello!" },
      ],
    },
    {
      id: 2,
      name: "Shabiha Shabnam",
      avatar:
        "https://media.licdn.com/dms/image/D5635AQG8C5wVlMhmSw/profile-framedphoto-shrink_800_800/0/1690135180346?e=1718301600&v=beta&t=vUI8ZHr1JTDaIRMmFGDJYG5W0Pzu2n4bG2t6BtzlK7s",
      lastMessage: "Hey there!",
      messages: [
        { sender: "John", text: "Hey there!" },
        { sender: "me", text: "Hello!" },
      ],
    },
    // More chats...
  ]);

  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const user = {
    name: "Jane Smith",
    avatar: "path/to/avatar.jpg",
    status: "Online",
  };

  const handleSendMessage = (message) => {
    const updatedChat = {
      ...selectedChat,
      messages: [...selectedChat.messages, { sender: "me", text: message }],
    };
    setSelectedChat(updatedChat);
    setChats(
      chats.map((chat) => (chat.id === selectedChat.id ? updatedChat : chat))
    );
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4">
        <UserProfile user={user} />
        <ChatList chats={chats} onSelectChat={setSelectedChat} />
      </div>
      <div className="flex flex-col flex-1">
        <ChatWindow chat={selectedChat} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default App;
