import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  return (
    <div className="mt-20 bg-gray-100">
      <div className="container-layout container-layout-lg container-layout-xl">
        <h3 className="flex justify-center py-10 text-5xl text-blue-600 md:text-6xl">
          關於我們
        </h3>
      </div>
      <motion.div
        ref={ref1}
        initial={{ scale: 0.5, opacity: 0, x: -50 }}
        animate={
          inView1
            ? { scale: 1.0, opacity: 1, x: 0 }
            : { scale: 0.5, opacity: 0, x: -50 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="container-layout container-layout-lg container-layout-xl my-5"
      >
        <div
          className="hero min-h-[60vh] bg-cover bg-center lg:min-h-[50vh] xl:min-h-screen"
          style={{
            backgroundImage: "url(images/shake-hand.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-white opacity-80">
            <div className="w-full">
              <h3 className="mb-5 text-2xl font-bold md:text-3xl lg:text-4xl">
                我們的理念
              </h3>
              <p className="mb-5 text-lg text-red-600 md:text-xl lg:text-2xl">
                以人為本
              </p>
              <p className="mb-5 break-words text-xs md:text-base xl:text-lg">
                我們深知電器不僅是日常生活中的工具，更是提升生活品質的重要夥伴。
                <br />
                我們自創立以來一直秉持著「以人為本」的核心理念，
                <br />
                並致力於為每一位顧客提供最優質的服務體驗。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ scale: 0.5, opacity: 0, x: 50 }}
        animate={
          inView2
            ? { scale: 1.0, opacity: 1, x: 0 }
            : { scale: 0.5, opacity: 0, x: 50 }
        }
        transition={{ duration: 1, ease: "easeInOut" }}
        className="container-layout container-layout-lg container-layout-xl mb-10"
      >
        <div
          className="hero min-h-[60vh] bg-cover bg-center lg:min-h-[50vh] xl:min-h-screen"
          style={{
            backgroundImage: "url(images/clean.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-white opacity-80">
            <div className="w-full">
              <h3 className="mb-5 text-2xl font-bold md:text-3xl lg:text-4xl ">
                我們的堅持
              </h3>
              <p className="mb-5 text-lg text-red-600 md:text-xl lg:text-2xl ">
                細節至上
              </p>
              <p className="mb-5 break-words text-xs md:text-base xl:text-lg">
                我們特別注重施工的整潔與細節，這是我們與眾不同的關鍵。
                <br />
                在每一次的安裝和維修服務中我都會確保工作現場的整潔，並避免留下任何灰塵或垃圾。
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
