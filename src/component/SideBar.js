import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SideBarItem = ({ imgUrl, imgAlt, title, content, reverse }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  const animationVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: reverse ? 10 : -10,
      y: reverse ? 100 : -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      className={reverse ? "sidebar-reverse" : "sidebar"}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
    >
      <div className="sidebar-picture bg-slate-100">
        <img
          src={imgUrl}
          alt={imgAlt}
          className="min-h-full w-full rounded-lg align-middle"
          loading="lazy"
        />
      </div>
      <div className="sidebar-paragraph">
        <motion.h3
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          className="sidebar-paragraph-title"
        >
          {title}
        </motion.h3>
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          className="sidebar-paragraph-content"
        >
          {content}
        </motion.p>
      </div>
    </motion.div>
  );
};

const SideBar = () => {
  const sidebarItems = [
    {
      imgUrl: "images/life.jpg",
      imgAlt: "life",
      title: "未來居住的創新",
      content: `智慧家庭技術正在改變我們的居住方式，使家庭更智能跟節能。
                透過智能冰箱和智能烤爐等設備，這些技術不只增加日常便利。
                同時也幫助家庭有效管理能源消耗，降低環境負擔。`,
      reverse: false,
    },
    {
      imgUrl: "images/space.jpg",
      imgAlt: "space",
      title: "打造舒適高效空間",
      content: `智慧家庭設計專注於融合最新科技來提升居住體驗。
                自動窗簾、環境音響系統以及遠程控制的安全設施，均旨是在打造一個便利和舒適的居家環境。`,
      reverse: true,
    },
    {
      imgUrl: "images/protect.jpg",
      imgAlt: "protect",
      title: "全面保護您的居所",
      content: `隨著科技進展智慧家庭安全系統變得更加全面方便。
                從進階的運動感應器到全方位的監控攝影機，這些高科技設備確保您的居家時刻安全。`,
      reverse: false,
    },
    {
      imgUrl: "images/system.jpg",
      imgAlt: "system",
      title: "簡化生活的智能系統",
      content: `智慧家庭控制系統為居家日常活動帶來便利。
                通過手機或語音命令，您可以輕鬆調節溫度、控制照明或是管理娛樂系統，享受科技帶來的輕鬆生活。`,
      reverse: true,
    },
  ];
  return (
    <div className="bg-gray-100">
      <div className="container-layout container-layout-lg container-layout-xl my-20 md:my-24">
        {sidebarItems.map((item, index) => {
          return (
            <SideBarItem
              key={index}
              imgUrl={item.imgUrl}
              imgAlt={item.imgAlt}
              title={item.title}
              content={item.content}
              reverse={item.reverse}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
