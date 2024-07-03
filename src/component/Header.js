import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const UlGroup = ({ datas, className, isMobile }) => {
  return (
    <ul className={className.ul}>
      {datas.map((data) => (
        <motion.li
          className={`${className.liGroup}  
          ${isMobile ? "rounded-md active:border-2 active:border-solid active:border-blue-500" : ""}`}
          key={data.id}
          whileHover={{ scale: 1.05, color: "#3B82F6" }}
          whileTap={{ scale: 0.95, color: "#2563EB" }}
          transition={{ duration: 1 }}
        >
          <Link to={data.path} className="block w-full">
            {data.title}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

const Header = ({ datas }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-gray-800 shadow-md">
      <div className="container-layout container-layout-lg container-layout-xl flex items-center justify-center lg:justify-between">
        <div className="flex justify-center text-center md:justify-between lg:w-1/4">
          <h2 className="flex items-center py-4 text-4xl">daisyUI</h2>
          <div className="dropdown px-2 py-4">
            <motion.button
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
            >
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
            </motion.button>
          </div>
        </div>
        <div className="hidden lg:flex lg:w-3/4 lg:justify-end">
          <UlGroup
            datas={datas}
            className={{
              ul: "menu menu-lg flex flex-row items-center p-2",
              liGroup: "py-2 text-gray-400",
            }}
            isMobile={false}
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
                liGroup: "py-2 text-center text-xl font-medium text-gray-400",
              }}
              onClick={toggleMenu}
              isMobile={true}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
