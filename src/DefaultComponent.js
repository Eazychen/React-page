import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineCalendar,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai";

const DefaultComponent = ({ Component }) => {
  const datas = [
    { id: 1, path: "/about", title: "關於我們", icon: <AiOutlineInfoCircle /> },
    { id: 2, path: "/services", title: "預約服務", icon: <AiOutlineCalendar /> },
    { id: 3, path: "/smart-home", title: "智慧居家", icon: <AiOutlineHome /> },
    { id: 4, path: "/contact", title: "聯繫我們", icon: <AiOutlinePhone /> },
  ];
  return (
    <div>
      <Component datas={datas} />
    </div>
  );
};

export default DefaultComponent;
