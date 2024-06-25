import React from "react";
import Swiper from "./component/Swiper.js";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";

const HomePage = ({ datas, serviceFeatureSectionDatas }) => {
  return (
    <div>
      <Header datas={datas} />
      <Swiper />
      <Footer datas={datas} />
    </div>
  );
};

export default HomePage;
