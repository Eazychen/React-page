import React from "react";
import { useNavigate } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const UlGroup = ({ datas, className }) => {
  const navigate = useNavigate();
  return (
    <ul className={className.ul}>
      {datas.map((data) => (
        <li
          className={className.liGroup}
          key={data.id}
          onClick={() => navigate(data.path, { state: "TW102324" })}
        >
          {data.title}
        </li>
      ))}
    </ul>
  );
};

const Footer = ({ datas }) => {
  return (
    <div>
      <footer className="border-t-2 border-solid border-gray-200">
        <div className="mx-56 px-6">
          <div className="footer">
            <div className="ml-2">
              <h3 className="mb-3 text-4xl font-bold">Title</h3>
              <ul className="flex justify-start">
                <li className="footer-first-li">
                  <FaInstagram size={20} color="#fff" />
                </li>
                <li className="footer-first-li mx-2">
                  <FaFacebookF size={20} color="#fff" />
                </li>
                <li className="footer-first-li">
                  <FaTiktok size={20} color="#fff" />{" "}
                </li>
              </ul>
            </div>
            <UlGroup
              datas={datas}
              className={{ ul: "px-2", liGroup: "footer-li" }}
            />
            <div className="px-2">
              <ul>
                <li>常見問題</li>
                <li className="mt-1">服務條款</li>
                <li className="mt-1">隱私權服務</li>
              </ul>
            </div>
            <div className="mr-2 flex flex-col">
              <label htmlFor="email">訂閱最新消息</label>
              <div>
                <input
                  type="email"
                  className="footer-input"
                  placeholder="Email"
                  id="email"
                />
              </div>
              <button type="button" className="btn-dangerous">
                訂閱
              </button>
            </div>
          </div>
          <p className="py-6 text-center font-bold">
            Copyright &copy; 2023-2024 Eazy All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
