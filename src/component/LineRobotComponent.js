import axios from "axios";
import React, { useEffect } from "react";

const LineRobotComponent = () => {
  const fetchMessages = async () => {
    try {
      const response = await axios.post(
        "https://limingelectronics-e60be4725b1d.herokuapp.com/api/webhook",
        {
          events: [
            {
              type: "message",
              message: {
                type: "text",
                text: "Hello, this is a test message",
              },
            },
          ],
        },
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
