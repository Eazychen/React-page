import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SideBar from "./component/SideBar";
import LoadingAnimation from "./component/LoadingAnimation";

const SmartAppliancesPage = ({ datas }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <SideBar />
      <Footer datas={datas} />
    </div>
  );
};

export default SmartAppliancesPage;
