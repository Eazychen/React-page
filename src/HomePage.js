import React from "react";
import Swiper from "./component/Swiper.js";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import MagazineLayout from "./component/MagazineLayout.js";

const HomePage = ({ datas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <Swiper />
      <MagazineLayout />
      <Footer datas={datas} />
    </div>
  );
};

export default HomePage;
