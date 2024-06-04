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

const Header = ({ datas }) => {
  return (
    <div className="bg-nav-color bg-black-alpha fixed left-0 right-0 top-0 z-20">
      <nav className="nav text-brown-normal">
        <div className="my-3 text-4xl font-bold">Title</div>
        <UlGroup
          datas={datas}
          className={{ ul: "nav-ul", liGroup: "nav-li-group" }}
        />
      </nav>
    </div>
  );
};

export default Header;
