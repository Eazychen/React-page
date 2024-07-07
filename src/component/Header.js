import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const UlGroup = ({ datas, className, isMobile, activeItem, setActiveItem }) => {
  const location = useLocation();
  return (
    <ul className={className.ul}>
      {datas.map((data) => (
        <motion.li
          className={`${className.liGroup} ${
            isMobile ||
            activeItem === data.id ||
            location.pathname === data.path
              ? "rounded-md active:border-2 active:border-solid active:border-blue-500"
              : ""
          }`}
          key={data.id}
          whileHover={{ scale: 1.05, color: "#3B82F6" }}
          whileTap={{ scale: 0.95, color: "#2563EB" }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to={data.path}
            className="flex w-full items-center justify-center lg:justify-end"
            onClick={() => setActiveItem(data.id)}
          >
            {data.title}
            <span className="ml-2 ">{data.icon}</span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

const Header = ({ datas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="fixed left-0 top-0 z-50  w-full bg-gray-800 shadow-md">
      <div className="container-layout container-layout-lg container-layout-xl flex items-center justify-center lg:justify-between">
        <div className="flex justify-center text-center md:justify-start lg:w-1/4">
          <h2 className="flex items-center py-4 text-4xl text-white">
            daisyUI
          </h2>
          <div className="dropdown px-2 py-4 lg:hidden">
            <motion.button
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-8 object-cover text-gray-600 delay-300 active:text-gray-100 "
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
            </motion.button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-3/4 lg:justify-end">
          <UlGroup
            datas={datas}
            className={{
              ul: "font-roboto menu menu-md flex flex-row items-center xl:menu-lg",
              liGroup: "py-2 tracking-wide text-gray-400",
            }}
            isMobile={false}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden"
          >
            <UlGroup
              datas={datas}
              className={{
                ul: "space-y-1 px-2 pb-3 pt-2 sm:px-3",
                liGroup:
                  "font-roboto flex py-2 text-center text-lg font-medium tracking-wide text-gray-400",
              }}
              onClick={toggleMenu}
              isMobile={true}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
