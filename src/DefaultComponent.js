import React from "react";

const DefaultComponent = ({ Component }) => {
  const datas = [
    { id: 1, title: "關於我們", path: "/about" },
    { id: 2, title: "預約服務", path: "/services" },
    { id: 3, title: "智慧居家", path: "/smartappliances" },
    { id: 4, title: "聯繫我們", path: "/contact" },
  ];
  const serviceFeatureSectionDatas = [
    {
      title: "電器維修",
      paragraph: `我們提供專業的電器維修服務。無論是電視、冰箱還是洗衣機我們的技術團隊都能快速診斷和修復問題，確保您的電器儘快恢復正常工作。`,
      imgUrl: "https://picsum.photos/id/208/600/300",
    },
    {
      title: "高效安裝",
      paragraph: `我們的安裝服務覆蓋所有類型的電器產品。從智慧居家、廚房電器到大小家電確保每個設備都能安全且正確的安裝為您節省時間精力。`,
      imgUrl: "https://picsum.photos/id/202/600/300",
    },
    {
      title: "保養服務",
      paragraph: `為了延長電器的使用壽命，我們提供定期維護服務。我們定期檢查您的設備。預防潛在問題的發生確保電器長期穩定運行。`,
      imgUrl: "https://picsum.photos/id/204/600/300",
    },
    {
      title: "緊急支援",
      paragraph: `遇到電器故障我們的緊急支援服務隨時待命，無論何時何地我們都會迅速回應。確保在最短時間內為您解決問題讓您無後顧之憂。`,
      imgUrl: "https://picsum.photos/id/203/600/300",
    },
    {
      title: "誠心推薦",
      paragraph: `作為專業電器行的我們，致力於為您提供最佳的家電選擇。我們會按照顧客所提出需求推薦優質家電，幫助您打造理想的居家生活。`,
      imgUrl: "https://picsum.photos/id/203/600/300",
    },
  ];
  return (
    <div>
      <Component
        datas={datas}
        serviceFeatureSectionDatas={serviceFeatureSectionDatas}
      />
    </div>
  );
};

export default DefaultComponent;
