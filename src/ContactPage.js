import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import LoadingAnimation from "./component/LoadingAnimation";

const ContactPage = ({ datas }) => {
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
      <Contact />
      <Footer datas={datas} />
    </div>
  );
};

export default ContactPage;
