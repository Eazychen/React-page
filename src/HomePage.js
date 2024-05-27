import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Swiper from "./Swiper.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import FeaturesSection from "./FeaturesSection.js";

const Services = () => {
  useEffect(() => {
    fetch("/services")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  });
  const location = useLocation();
  console.log(location);
  return <h2>{location.state}</h2>;
};

const Contact = () => {
  const params = useParams();
  const { id } = params;
  return <h2>contact us{id}</h2>;
};

const HomePage = () => {
  return (
    <div>
      <Header />
      <Swiper />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export { HomePage, Services, Contact };
