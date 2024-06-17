import React from "react";
import Swiper from "./component/Swiper.js";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import FeatureSection from "./component/FeatureSection.js";
import MagazineLayout from "./component/MagazineLayout.js";
import LineRobotComponent from "./component/LineRobotComponent.js";

const HomePage = ({ datas, serviceFeatureSectionDatas }) => {
  return (
    <div>
      <Header datas={datas} />
      <Swiper />
      <MagazineLayout />
      <FeatureSection serviceFeatureSectionDatas={serviceFeatureSectionDatas} />
      <Footer datas={datas} />
      <LineRobotComponent />
    </div>
  );
};

export default HomePage;
