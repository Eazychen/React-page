import React from "react";

const BookingSteps = () => {
  const steps = [
    "填寫基本資料",
    "確認勘查時間",
    "場地勘查檢修",
    "初步評估報價",
    "安排施工日期",
  ];
  return (
    <div className="bg-gray-100">
      <div className=" container-layout container-layout-lg container-layout-xl relative">
        <div
          className="item-center flex min-h-[50vh] w-full bg-cover bg-center bg-no-repeat md:justify-end xl:min-h-screen"
          style={{ backgroundImage: "url(images/form-background.jpg)" }}
        ></div>
        <div className="relative my-10 rounded-lg bg-white bg-opacity-90 p-4 shadow-lg md:absolute md:right-[5%] md:top-1/2 md:w-1/3 md:max-w-sm md:-translate-y-1/2 md:transform">
          <ul className="steps steps-vertical w-full text-xl text-gray-600">
            {steps.map((step, index) => (
              <li key={index} className={`step`}>
                {step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
