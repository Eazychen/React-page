import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";

const SmartAppliances = ({ datas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <SideBar />
      <Footer datas={datas} />
    </div>
  );
};

export default SmartAppliances;
