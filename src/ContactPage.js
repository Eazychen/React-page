import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";

const ContactPage = ({ datas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      
      <Footer datas={datas} />
    </div>
  );
};

export default ContactPage;
