import axios from "axios";
import React, { useEffect, useState } from "react";

const LineRobotComponent = () => {
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        "https://liming-electronics-e60be4725b1d.herokuapp.com/api/messages",
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);
  return <div></div>;
};

export default LineRobotComponent;
