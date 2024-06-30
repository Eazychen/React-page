import React from "react";
import { Link } from "react-router-dom";

const UlGroup = ({ datas, className }) => {
  return (
    <ul className={className.ul}>
      {datas.map((data) => (
        <li className={className.liGroup} key={data.id}>
          <Link to={data.path}>{data.title}</Link>
        </li>
      ))}
    </ul>
  );
};

const Header = ({ datas }) => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-base-100">
      <div className="container-layout container-layout-lg container-layout-xl flex items-center justify-center lg:my-2 lg:justify-between">
        <div className="flex justify-center p-2 text-center md:justify-between lg:w-1/4">
          <h2 className="flex items-center p-2 text-4xl">daisyUI</h2>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-8 object-cover"
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
                ul: "menu-xl menu dropdown-content -right-2/3 z-[1] mt-3 w-64 rounded-box bg-base-100 p-2 shadow md:w-72",
                liGroup: "li-group",
              }}
            />
          </div>
        </div>
        <div className="hidden lg:flex lg:w-3/4 lg:justify-end">
          <UlGroup
            datas={datas}
            className={{
              ul: "menu menu-lg flex flex-row items-center p-2",
              liGroup: "li-group",
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
