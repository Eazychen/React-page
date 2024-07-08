import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLine } from "react-icons/fa";

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

const Footer = ({ datas }) => {
  return (
    <div>
      <footer className="border-t-2 border-solid border-gray-300 bg-gray-800">
        <div className="container-layout container-layout-lg container-layout-xl">
          <div className="footer-group footer-group-md">
            <div className="my-2 flex w-full justify-center md:w-1/3">
              <div className="flex flex-col items-center p-1 md:items-start xl:p-2">
                <h3 className="mb-2 flex w-full">
                  <div className="w-1/3">
                    <img src="/images/logo.png" alt="" />
                  </div>
                  <span className="flex w-2/3 items-center justify-end text-xl text-gray-200">
                    立明電器
                  </span>
                </h3>
                <ul className="flex justify-start py-2">
                  <li className="footer-first-li">
                    <a
                      href="https://www.instagram.com/worker.eric/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FaInstagram size={25} color="#fff" />
                    </a>
                  </li>
                  <li className="footer-first-li mx-2">
                    <a
                      href="https://www.facebook.com/0953537123.Eric.Taichung"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FaFacebook size={25} color="#fff" />
                    </a>
                  </li>
                  <li className="footer-first-li">
                    <a
                      href="https://lin.ee/pa7PkA0"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FaLine size={25} color="#fff" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-2 flex w-full flex-col justify-center p-1 md:w-1/3 xl:p-2 ">
              <h5 className="footer-title text-center font-raleway text-xl tracking-wide">
                服務相關
              </h5>
              <UlGroup
                datas={datas}
                className={{
                  ul: "flex flex-col p-1 xl:p-2",
                  liGroup:
                    "footer-li-first text-center font-raleway tracking-wide text-gray-400",
                }}
              />
            </div>
            <div className="my-2 flex w-full flex-col p-1 md:w-1/3 xl:p-2">
              <h5 className="footer-title text-center text-xl tracking-wide">
                聯絡方式
              </h5>
              <ul className="flex flex-col p-1 xl:p-2">
                <li className="footer-li-second text-center text-gray-400 hover:text-blue-600">
                  <strong>電話：</strong>
                  <a className="ml-1" href="tel:0953537123">
                    0953-537-123
                  </a>
                </li>
                <li className="footer-li-second text-center text-gray-400 hover:text-blue-600">
                  <strong>地址:</strong>
                  <a
                    className="ml-1"
                    href="https://maps.app.goo.gl/Fj1eKydQsmeyTaBS6"
                    target="_blank"
                    rel="noopener noreferrer" //安全性考量
                  >
                    台中市大里區立仁路42-7號
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container-layout-xl container-layout-lg  mx-auto">
            <p className="text-balance py-3 text-center font-bold tracking-wide text-gray-500 md:text-xl">
              Copyright &copy; 2023-2024 Li Ming Electronics All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
