import axios from "axios";
import React, { useEffect } from "react";

const LineRobotComponent = () => {
  const fetchMessages = async () => {
    try {
      const response = await axios.post(
        "https://limingelectronics-e60be4725b1d.herokuapp.com/line",
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
