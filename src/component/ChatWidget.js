import React, { useState } from "react";

const ChatWidget = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  //切換對話框顯示
  const toggleChat = () => setShowChat(!showChat);

  const sendMessage = async () => {
    if (input.trim()) return;
    const response = await fetch("/api/line/sendMessage");
  };

  return <div></div>;
};

export default ChatWidget;
