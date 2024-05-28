import React from "react";
import Swiper from "./Swiper.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import FeatureSection from "./FeatureSection.js";

const HomePage = () => {
  const featureSectionDatas = [
    {
      title: "專業電器維修",
      paragraph: `我們提供專業的電器維修服務\n無論是電視、冰箱還是洗衣機\n我們的技術團隊都能快速診斷和修復問題\n確保您的電器儘快恢復正常工作`,
      imgUrl: "https://picsum.photos/id/208/600/300",
    },
    {
      title: "高效安裝",
      paragraph: `我們的安裝服務覆蓋所有類型的電器產品\n從智慧居家到廚房電器我們將確保每個設備都能安全正確的安裝\n為您節省時間和精力`,
      imgUrl: "https://picsum.photos/id/202/600/300",
    },
    {
      title: "保養服務",
      paragraph: `為了延長電器的使用壽命\n我們提供定期維護服務我們會定期檢查您的設備\n預防潛在問題的發生確保電器長期穩定運行`,
      imgUrl: "https://picsum.photos/id/204/600/300",
    },
    {
      title: "緊急支援",
      paragraph: `遇到電器故障我們的緊急支援服務隨時待命\n無論何時何地我們的技術團隊都會迅速回應\n確保在最短時間內為您解決問題讓您無後顧之憂`,
      imgUrl: "https://picsum.photos/id/203/600/300",
    },
  ];
  return (
    <div>
      <Header />
      <Swiper />
      <FeatureSection featureSectionDatas={featureSectionDatas} />
      <Footer />
    </div>
  );
};

export default HomePage;
