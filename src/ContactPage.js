import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Contact from "./component/Contact";

const ContactPage = ({ datas }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <Contact />
      <Footer datas={datas} />
    </div>
  );
};

export default ContactPage;
