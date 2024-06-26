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
      <footer className="border-t-2 border-solid border-gray-300 bg-base-300">
        <div className="container-layout container-layout-lg container-layout-xl">
          <div className="footer-group footer-group-md">
            <div className="my-2 flex w-full justify-center md:w-1/3">
              <div className="flex flex-col items-center p-1 md:items-start xl:p-2">
                <h3 className="mb-2 text-2xl font-bold lg:text-4xl">daisyUI</h3>
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
              <h5 className="footer-title text-center text-xl">服務相關</h5>
              <UlGroup
                datas={datas}
                className={{
                  ul: "flex flex-col p-1 xl:p-2",
                  liGroup: "footer-li-first text-center",
                }}
              />
            </div>
            <div className="my-2 flex w-full flex-col p-1 md:w-1/3 xl:p-2">
              <h5 className="footer-title text-center text-xl">聯絡方式</h5>
              <ul className="flex flex-col p-1 xl:p-2">
                <li className="footer-li-second text-center">
                  電話:<span className="ml-1 text-balance">0953-537-123</span>
                </li>
                <li className="footer-li-second text-center">
                  地址:
                  <span className="ml-1 text-balance">
                    412台中市大里區立仁路42-7號
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container-layout-xl container-layout-lg  mx-auto">
            <p className="text-balance py-3 text-center font-bold text-gray-500  md:text-xl">
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
