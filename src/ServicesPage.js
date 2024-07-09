import React, { useState, useEffect } from "react";
import FormComponent from "./component/FormComponent";
import Header from "./component/Header";
import Footer from "./component/Footer";
import LoadingAnimation from "./component/LoadingAnimation";

const ServicesPage = ({ datas }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <FormComponent />
      <Footer datas={datas} />
    </div>
  );
};

export default ServicesPage;
