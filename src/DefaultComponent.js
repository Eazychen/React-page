import React from "react";

const DefaultComponent = ({ Component }) => {
  const datas = [
    { id: 1, title: "關於我們", path: "/about" },
    { id: 2, title: "預約服務", path: "/services" },
    { id: 3, title: "智慧居家", path: "/smartAppliances" },
    { id: 4, title: "聯繫我們", path: "/contact" },
  ];

  return (
    <div>
      <Component datas={datas} />
    </div>
  );
};

export default DefaultComponent;
