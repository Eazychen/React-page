import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  "填寫基本資料",
  "確認勘查時間",
  "場地勘查檢修",
  "初步評估報價",
  "安排施工日期",
];

const BookingSteps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  const animationVariants = {
    hidden: { opacity: 0, x: 50 }, // 隱藏時的狀態：透明且右移
    visible: { opacity: 1, x: 0 }, // 顯示時的狀態：完全不透明且位置歸位
  };

  //使用 useEffect 設置定時器，定時更新 currentStep 以顯示下一個步驟
  useEffect(() => {
    const interval = setInterval(() => {
      // 每隔2秒將 currentStep 增加1，並使用%取餘數確保步驟循環，確保不會超過陣列長度。
      // 因為每次到 5 % 5 都會變回 0
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    // 清除定時器，回傳值是清除副作用的函數
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="container-layout container-layout-lg container-layout-xl my-20 flex flex-col justify-center">
        <div>
          <h3 className="title mb-10">預約流程</h3>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="relative"
          >
            <div
              className="item-center flex min-h-[50vh] w-full bg-cover bg-center bg-no-repeat opacity-70 md:min-h-[60vh]  md:justify-end lg:min-h-screen"
              style={{ backgroundImage: "url(images/form-background.jpg)" }}
            ></div>
            <div className="relative my-10 rounded-lg bg-white bg-opacity-90 p-4 shadow-lg md:absolute md:right-[5%] md:top-1/2 md:my-0 md:w-1/3 md:-translate-y-1/2 md:transform">
              <ul className="steps steps-vertical w-full text-xl text-gray-600">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    className={`step ${index <= currentStep ? "step-primary" : ""}`}
                  >
                    {/* AnimatePresence 用於管理進場和退場動畫 */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentStep >= index ? "active" : "inactive"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex w-full items-center justify-center"
                      >
                        <div
                          className={`p-2 font-bold ${currentStep === index ? "text-red-600" : ""}`}
                        >
                          {step}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
