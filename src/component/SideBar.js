import React from "react";


const SideBarItem = ({ imgUrl, imgAlt, title, content, reverse }) => {
  return (
    <div className={reverse ? "sidebar-reverse" : "sidebar"}>
      <div className="sidebar-picture">
        <img
          src={imgUrl}
          alt={imgAlt}
          className="h-auto w-full rounded-lg align-middle"
        />
      </div>
      <div className="sidebar-paragraph">
        <h3 className="sidebar-paragraph-title">{title}</h3>
        <p className="sidebar-paragraph-content">{content}</p>
      </div>
    </div>
  );
};

const SideBar = () => {
  const sidebarItems = [
    {
      imgUrl: "images/life.jpg",
      imgAlt: "life",
      title: "未來居住的創新",
      content: `智慧家庭技術正在改變我們的居住方式，使家庭更智能、更節能。
                透過智能冰箱和智能烤爐等設備，這些技術不只增加日常便利，同時也幫助家庭有效管理能源消耗，進而降低環境負擔。`,
      reverse: false,
    },
    {
      imgUrl: "images/space.jpg",
      imgAlt: "space",
      title: "打造舒適高效空間",
      content: `智慧家庭設計專注於融合最新科技來提升居住體驗。
                自動窗簾、環境音響系統，以及遠程控制的安全設施，均旨在創造一個便捷和舒適的家庭環境。`,
      reverse: true,
    },
    {
      imgUrl: "images/protect.jpg",
      imgAlt: "protect",
      title: "全面保護您的居所",
      content: `隨著科技進展，智慧家庭安全系統變得更加全面和精密。
                從進階的運動感應器到全方位的監控攝影機，這些高科技設備確保您的家園時刻安全。`,
      reverse: false,
    },
    {
      imgUrl: "images/system.jpg",
      imgAlt: "system",
      title: "簡化生活的智能系統",
      content: `智慧家庭控制系統為家庭日常活動帶來前所未有的便利。
                通過智能手機或語音命令，您可以輕鬆調節溫度、控制照明或是管理娛樂系統，
                享受科技帶來的輕鬆生活。`,
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
