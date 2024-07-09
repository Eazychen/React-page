import React, { useEffect, useState } from "react";
import Header from "./component/Header.js";
import Footer from "./component/Footer.js";
import HeroSection from "./component/HeroSection.js";
import ServiceFeature from "./component/ServiceFeature.js";
import BookingSteps from "./component/BookingSteps.js";
import Swiper from "./component/Swiper.js";
import LoadingAnimation from "./component/LoadingAnimation.js";

const HomePage = ({ datas }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  const serviceFeatureDatas = [
    {
      title: "電器維修",
      paragraph: `我們提供專業的電器維修服務。無論是電視、冰箱還是洗衣機都能快速診斷和修復問題。確保您的電器儘快恢復正常工作。`,
    },
    {
      title: "高效安裝",
      paragraph: `我們的安裝服務覆蓋所有類型的電器產品。從智慧居家、廚房電器到大小家電確保每個設備都能安全正確的安裝為您節省時間精力。`,
    },
    {
      title: "保養服務",
      paragraph: `為了延長電器的使用年限與壽命，我們提供定期維護服務。
      我們會定期檢查您的設備，預防潛在問題的發生確保電器長期穩定運行。`,
    },
    {
      title: "緊急支援",
      paragraph: `遇到電器故障我們的緊急支援服務隨時待命，無論何時何地我們都會迅速回應。
      確保在最短時間內為您解決問題讓您無後顧之憂。`,
    },
    {
      title: "誠心推薦",
      paragraph: `作為專業電器行的我們，致力於為您提供最佳的家電選擇。
      我們會按照顧客所提出需求推薦優質家電，幫助您打造理想的居家生活。`,
    },
    {
      title: "優質合作",
      paragraph: `我們與頂級電器品牌保持長期合作，為客戶提供最新優質產品。
      這不僅確保優惠價格還能帶來第一手產品資訊和專業支援，滿足您的各種需求。`,
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <Header datas={datas} />
      <Swiper />
      <HeroSection />
      <BookingSteps />
      <ServiceFeature serviceFeatureDatas={serviceFeatureDatas} />
      <Footer datas={datas} />
    </div>
  );
};

export default HomePage;
