import React from "react";
import { FaInstagram, FaFacebook, FaLine } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="border-t-2 border-solid border-gray-300 bg-base-100">
        <div className="container-layout-md">
          <div className="footer-group footer-group-md">
            <div className="my-2 flex w-full justify-center md:w-1/3 md:justify-start">
              <div
                className="flex flex-col items-center p-2 md:items-start
               md:py-2 md:pl-0"
              >
                <h3 className="mb-2 text-4xl font-bold">daisyUI</h3>
                <ul className="flex justify-start py-2">
                  <li className="footer-first-li">
                    <FaInstagram size={25} color="#fff" />
                  </li>
                  <li className="footer-first-li mx-2">
                    <FaFacebook size={25} color="#fff" />
                  </li>
                  <li className="footer-first-li">
                    <FaLine size={25} color="#fff" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="my-2 flex w-full justify-center md:w-1/3 md:justify-start">
              <ul className="flex flex-col p-2">
                <li className="footer-title text-xl">服務相關</li>
                <li className="footer-li">關於我們</li>
                <li className="footer-li">預約服務</li>
                <li className="footer-li">智慧家居</li>
                <li className="footer-li">聯絡我們</li>
              </ul>
            </div>
            <div className="my-2 flex w-full justify-center md:w-1/3 md:justify-start">
              <ul className="flex flex-col p-2">
                <li className="footer-title text-xl">聯絡方式</li>
                <li className="footer-li">電話:</li>
                <li className="footer-li">地址:</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container-layout">
            <p className="py-3 text-center font-bold text-gray-500">
              Copyright &copy; 2023-2024 Eazy All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
