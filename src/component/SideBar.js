import React from "react";

const SideBar = () => {
  return (
    <div>
      <div className="container-layout my-24">
        <div className="sidebar">
          <div className="sidebar-picture">
            <img src="images/life.jpg" alt="" className="w-full align-middle" />
          </div>
          <div className="sidebar-paragraph">
            <h3 className="sidebar-paragraph-title">未來居住的創新</h3>
            <p className="sidebar-paragraph-content">
              智慧家庭技術正在改變我們的居住方式， 使家庭更智能、更節能。
              <br />
              透過智能冰箱和智能烤爐等設備， 這些技術不只增加日常便利，
              <br />
              同時也幫助家庭有效管理能源消耗，進而降低環境負擔。
            </p>
          </div>
        </div>
        <div className="sidebar-reverse">
          <div className="sidebar-picture">
            <img
              src="images/space.jpg"
              alt=""
              className="w-full align-middle"
            />
          </div>
          <div className="sidebar-paragraph">
            <h3 className="sidebar-paragraph-title">打造舒適高效空間</h3>
            <p className="sidebar-paragraph-content">
              智慧家庭設計專注於融合最新科技來提升居住體驗。
              <br />
              自動窗簾、環境音響系統，以及遠程控制的安全設施，
              <br />
              均旨在創造一個便捷和舒適的家庭環境。
            </p>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-picture">
            <img
              src="images/protect.jpg"
              alt=""
              className="w-full align-middle"
            />
          </div>
          <div className="sidebar-paragraph">
            <h3 className="sidebar-paragraph-title">全面保護您的居所</h3>
            <p className="sidebar-paragraph-content">
              隨著科技進展，智慧家庭安全系統變得更加全面和精密。
              <br />
              從進階的運動感應器到全方位的監控攝影機，
              <br />
              這些高科技設備確保您的家園時刻安全。
            </p>
          </div>
        </div>
        <div className="sidebar-reverse">
          <div className="sidebar-picture">
            <img
              src="images/system.jpg"
              alt=""
              className="w-full align-middle"
            />
          </div>
          <div className="sidebar-paragraph">
            <h3 className="sidebar-paragraph-title">簡化生活的智能系統</h3>
            <p className="sidebar-paragraph-content">
              智慧家庭控制系統為家庭日常活動帶來前所未有的便利。
              <br />
              通過智能手機或語音命令，您可以輕鬆調節溫度、控制照明或是管理娛樂系統，享受科技帶來的輕鬆生活。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
