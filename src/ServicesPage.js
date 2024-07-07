import React from "react";
import FormComponent from "./component/FormComponent";
import Header from "./component/Header";
import Footer from "./component/Footer";

const ServicesPage = ({ datas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <FormComponent />
      <Footer datas={datas} />
    </div>
  );
};

export default ServicesPage;
