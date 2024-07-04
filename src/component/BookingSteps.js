import React from "react";

const BookingSteps = () => {
  return (
    <div className="bg-gray-100">
      <div className=" container-layout container-layout-lg container-layout-xl relative">
        <div
          className="item-center flex min-h-[50vh] w-full bg-cover bg-center bg-no-repeat md:justify-end xl:min-h-screen"
          style={{ backgroundImage: "url(images/form-background.jpg)" }}
        ></div>
        <div className="relative my-10 rounded-lg bg-white bg-opacity-90 p-4 shadow-lg md:absolute md:right-[5%] md:top-1/2 md:w-1/3 md:max-w-sm md:-translate-y-1/2 md:transform">
          <ul className="steps steps-vertical w-full text-xl text-gray-600">
            <li className="step">填寫基本資料</li>
            <li className="step">確認問題時間</li>
            <li className="step">場地勘查檢修</li>
            <li className="step">初步評估報價</li>
            <li className="step">安排施工日期</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
