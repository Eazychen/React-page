import React from "react";
import Swiper from "./component/Swiper.js";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import MagazineLayout from "./component/MagazineLayout.js";
import FeatureSection from "./component/FeatureSection.js";

const HomePage = ({ datas, serviceFeatureSectionDatas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <Swiper />
      <MagazineLayout />
      <FeatureSection
        serviceFeatureSectionDatas={serviceFeatureSectionDatas}
        className={{
          service: "service",
          servicePic: "service-pic",
          serviceParagraph: "service-paragraph",
        }}
      />
      <Footer datas={datas} />
    </div>
  );
};

export default HomePage;
