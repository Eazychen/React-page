import React from "react";

import { useNavigate } from "react-router-dom";

const UlGroup = ({ datas, className }) => {
  const navigate = useNavigate();
  return (
    <ul className={className.ul}>
      {datas.map((data) => (
        <li className={className.liGroup} key={data.id}>
          <button
            className="p-2"
            onClick={() => {
              navigate(data.path);
            }}
          >
            {data.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

const Header = ({ datas }) => {
  return (
    <nav className="bg-base-100 fixed left-0 top-0 z-50 w-full">
      <div className="container-layout-md flex items-center justify-center md:justify-between ">
        <div className="p-2 text-center">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <UlGroup
              tabIndex={0}
              datas={datas}
              className={{
                ul: "menu menu-md dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow",
                liGroup: "nav-li-group",
              }}
            />
          </div>
          <h2 className="inline-flex p-2 text-3xl">daisyUI</h2>
        </div>
        <div className="hidden lg:flex lg:justify-end">
          <UlGroup
            datas={datas}
            className={{
              ul: "menu menu-lg flex flex-row flex-nowrap items-center p-2",
              liGroup: "nav-li-group",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
