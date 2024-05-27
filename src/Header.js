import React from "react";

import { useNavigate } from "react-router-dom";

const UlGroup = ({ datas, className }) => {
  const navigate = useNavigate();
  return (
    <ul className={className.ul}>
      {datas.map((data) => (
        <li
          className={className.liGroup}
          key={data.id}
          onClick={() => navigate(data.path)}
        >
          {data.title}
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const datas = [
    { id: 1, title: "精選服務", path: "/services" },
    { id: 2, title: "品牌故事", path: "/about" },
    { id: 3, title: "聯繫我們", path: "/contact" },
  ];
  return (
    <div>
      <nav className="nav">
        <div className="py-4 text-center text-4xl font-bold">Title</div>
        <UlGroup
          datas={datas}
          className={{ ul: "nav-ul", liGroup: "nav-li-group" }}
        />
      </nav>
    </div>
  );
};

export default Header;
