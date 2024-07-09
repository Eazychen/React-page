import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/Animation - 1720522053005.json";

const LoadingAnimation = () => {
  return (
    <div className="h-screen-full bg-gray-800">
      <div className="container-layout container-layout-lg container-layout-xl flex h-screen items-center justify-center ">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          style={{ width: 200, height: 200 }} // 調整大小
        />
      </div>
    </div>
  );
};

export default LoadingAnimation;
