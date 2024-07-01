import React from "react";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import HeroSection from "./component/HeroSection.js";
import FeatureSection from "./component/FeatureSection.js";

const HomePage = ({ datas, serviceFeatureSectionDatas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <HeroSection />
      <FeatureSection serviceFeatureSectionDatas={serviceFeatureSectionDatas} />
      <Footer datas={datas} />
    </div>
  );
};

export default HomePage;
