import React from "react";

const HeroSection = () => {
  return (
    <div className="mt-20 bg-gray-100">
      <div className="container-layout container-layout-lg container-layout-xl my-5">
        <div
          className="hero min-h-fit xl:min-h-screen"
          style={{
            backgroundImage: "url(images/shake-hand.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-black opacity-80">
            <div className="w-full">
              <h3 className="mb-5 text-2xl font-bold md:text-3xl lg:text-4xl">
                我們的理念
              </h3>
              <p className="mb-5 text-lg text-red-600 md:text-xl lg:text-2xl">
                以人為本
              </p>
              <p className="mb-5 break-words text-xs md:text-xl">
                我們深知電器不僅是日常生活中的工具，更是提升生活品質的重要夥伴。
                <br />
                自創立以來一直秉持著「以人為本」的核心理念，致力於為每一位顧客提供最優質的服務體驗。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-layout container-layout-lg container-layout-xl mb-10">
        <div
          className="hero min-h-fit xl:min-h-screen"
          style={{
            backgroundImage: "url(images/clean.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-black opacity-80">
            <div className="w-full">
              <h3 className="mb-5 text-2xl font-bold md:text-3xl lg:text-4xl ">
                我們的堅持
              </h3>
              <p className="mb-5 text-lg text-red-600 md:text-xl lg:text-2xl ">
                細節至上
              </p>
              <p className="mb-5 break-words text-xs md:text-xl">
                我們深知電器不僅是日常生活中的工具，更是提升生活品質的重要夥伴。
                <br />
                自創立以來一直秉持著「以人為本」的核心理念，致力於為每一位顧客提供最優質的服務體驗。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
