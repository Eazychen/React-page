import React from "react";

const FeaturesSection = () => {
  return (
    <div className="mt-20">
      <div className="mx-56 px-6">
        <div className="service">
          <div className="service-pic">
            <img
              src="https://picsum.photos/id/208/600/300"
              alt=""
              className=""
            />
          </div>
          <div className="service-paragraph">
            <h3>專業電器維修</h3>
            <p>
              我們提供專業的電器維修服務，無論是電視、冰箱還是洗衣機<br></br>
              我們的技術團隊都能快速診斷和修復問題
              <br />
              確保您的電器儘快恢復正常工作
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-pic">
            <img src="https://picsum.photos/id/230/600/300" alt="" />
          </div>
          <div className="service-paragraph">
            <h3>高效安裝</h3>
            <p>
              我們的安裝服務覆蓋所有類型的電器產品
              <br />
              從家庭娛樂系統到廚房電器
              <br />
              我們的專業人員將確保每個設備都能安全正確的安裝
              <br />
              為您節省時間和精力
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-pic">
            <img src="https://picsum.photos/id/220/600/300" alt="" />
          </div>
          <div className="service-paragraph">
            <h3>保養服務</h3>
            <p>
              為了延長電器的使用壽命，我們提供定期維護服務
              <br />
              我們的技術人員會定期檢查您的設備，預防潛在問題的發生
              <br />
              確保電器長期穩定運行。
            </p>
          </div>
        </div>
        <div className="service">
          <div className="service-pic">
            <img src="https://picsum.photos/id/219/600/300" alt="" />
          </div>
          <div className="service-paragraph">
            <h3>緊急支援</h3>
            <p>
              遇到電器故障，我們的緊急支援服務隨時待命
              <br />
              無論何時何地，我們的技術團隊都會迅速回應
              <br />
              確保在最短時間內為您解決問題，讓您無後顧之憂。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
