import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ imgUrl, title, subtitle, content, reverse }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: reverse ? 50 : -50,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      className="container-layout container-layout-lg container-layout-xl mb-10 "
    >
      <div
        className="hero min-h-[60vh] bg-cover bg-center lg:min-h-[50vh] xl:min-h-screen "
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-white opacity-80">
          <div className="w-full">
            <motion.h3
              variants={animationVariants}
              className="mb-5 text-center text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              {title}
            </motion.h3>
            <motion.p
              variants={animationVariants}
              className="mb-5 text-center text-lg text-red-600 md:text-xl lg:text-2xl"
            >
              {subtitle}
            </motion.p>
            <motion.p
              variants={animationVariants}
              className="mb-5 whitespace-pre-line break-words text-center text-xs md:p-2 md:text-base xl:text-lg "
            >
              {content}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-blue-100">
      <div className="container-layout container-layout-lg container-layout-xl my-20">
        <h3 className="title mb-10">關於我們</h3>
        <AnimatedSection
          imgUrl="images/shake-hand.jpg"
          title="我們的理念"
          subtitle="以人為本"
          content={`我們深知電器不僅是日常生活中的工具，更是提升生活品質的重要夥伴。
        我們自創立以來秉持著「以人為本」的核心理念，
        並致力於為每一位顧客提供最優質的服務體驗。`}
        />
        <AnimatedSection
          imgUrl="images/clean.jpg"
          title="我們的堅持"
          subtitle="細節至上"
          content={`我們特別注重施工整潔與細節，這是我們與眾不同的關鍵。
        在每一次安裝和維修服務中都會確保工作現場的整潔，並避免留下任何灰塵或垃圾。`}
          reverse
        />
      </div>
    </div>
  );
};

export default HeroSection;
