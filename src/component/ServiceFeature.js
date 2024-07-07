import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaTools,
  FaBox,
  FaWrench,
  FaBolt,
  FaHandsHelping,
  FaShieldAlt,
} from "react-icons/fa";

const iconMap = {
  電器維修: FaWrench,
  高效安裝: FaBolt,
  保養服務: FaTools,
  緊急支援: FaShieldAlt,
  誠心推薦: FaHandsHelping,
  優質合作: FaBox,
};

const ServiceFeatureItem = ({ title, paragraph }) => {
  const Icon = iconMap[title] || FaTools; // 默認使用 FaTools
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="my-5 flex w-full flex-wrap justify-evenly md:w-1/2"
    >
      <motion.figure
        whileHover={{
          scale: 1.2,
          rotate: 5,
        }}
        whileTap={{ scale: 1.1, rotate: 5 }}
        className="rounded-ful group flex w-1/4 items-center justify-center self-center p-4"
      >
        <Icon className="text-4xl text-gray-700 hover:text-blue-700 focus:text-blue-700 md:text-5xl" />
      </motion.figure>
      <div className="my-2 flex w-2/4 flex-col items-center justify-center">
        <motion.h3
          variants={variants}
          className="font-raleway card-title my-3 justify-center text-2xl font-semibold text-gray-700 "
        >
          {title}
        </motion.h3>
        <motion.p
          variants={variants}
          className="font-roboto whitespace-pre-line break-words p-2 text-sm leading-relaxed tracking-wide text-black md:text-base"
        >
          {paragraph}
        </motion.p>
      </div>
    </motion.div>
  );
};

const ServiceFeature = ({ serviceFeatureDatas }) => {
  return (
    <div className="bg-blue-100">
      <div className="container-layout container-layout-lg container-layout-xl my-20 flex flex-wrap">
        <h3 className=" title mb-10 ">相關服務</h3>
        {serviceFeatureDatas.map((item, index) => (
          <ServiceFeatureItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ServiceFeature;
