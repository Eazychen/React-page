import React from "react";
import FormComponent from "./component/FormComponent";
import Header from "./component/Header";
import Footer from "./component/Footer";

const Services = ({ datas, serviceFeatureSectionDatas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header
        datas={datas}
        serviceFeatureSectionDatas={serviceFeatureSectionDatas}
      />
      <FormComponent />
      <Footer
        datas={datas}
        serviceFeatureSectionDatas={serviceFeatureSectionDatas}
      />
    </div>
  );
};

export default Services;
