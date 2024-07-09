import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../animations/Animation - 1720522053005.json";

const LoadingAnimation = () => {
  return (
    <div className="container-layout container-layout-lg container-layout-xl flex h-screen items-center justify-center bg-gray-800">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: 200, height: 200 }} // 調整大小
      />
    </div>
  );
};

export default LoadingAnimation;
