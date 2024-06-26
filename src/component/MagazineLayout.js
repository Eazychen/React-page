import React from "react";

const MagazineLayout = () => {
  return (
    <div>
      <div className="bg-gray-100">
        <div className="container-layout container-layout-lg container-layout-xl py-10">
          <div className="magazine">
            <div className="magazine-title-layout">
              <div className="flex h-full items-center justify-center md:rounded-l-3xl">
                <h3 className="p-2 text-4xl tracking-widest text-indigo-600 md:text-6xl">
                  我們的理念
                </h3>
              </div>
            </div>
            <div className="magazine-slogan">
              <div className="flex h-full items-center justify-center rounded-xl bg-amber-100 p-4 shadow-md md:rounded-l-3xl">
                <h4 className="p-2 text-3xl tracking-widest text-indigo-400 md:text-5xl">
                  以人為本
                </h4>
              </div>
            </div>
            <div className="magazine-pic">
              <img
                src="https://picsum.photos/id/202/600/300"
                alt=""
                className="magazine-pic-img"
              />
            </div>
            <div className="magazine-paragraph">
              <div className="flex h-full items-center justify-center rounded-r-xl bg-amber-100 p-4 shadow-md md:rounded-r-3xl">
                <p className="break-words p-2 text-base leading-relaxed tracking-wider text-gray-700 md:text-2xl md:leading-10">
                  我們深知電器不僅是日常生活中的工具，更是提升生活品質的重要夥伴。
                  <br />
                  自創立以來一直秉持著「以人為本」的核心理念，致力於為每一位顧客提供最優質的服務體驗。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container-layout container-layout-lg container-layout-xl py-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-4">
            <div className="col-span-full md:col-span-2 md:col-start-2 md:row-span-1 md:row-start-1">
              <div className="flex h-full items-center justify-center md:rounded-l-3xl">
                <h3 className="p-2 text-4xl tracking-widest text-blue-700 md:text-6xl">
                  我們的堅持
                </h3>
              </div>
            </div>
            <div className="magazine-slogan">
              <div className="flex h-full items-center justify-center rounded-xl bg-amber-100 p-4 shadow-md md:rounded-l-3xl">
                <h4 className="p-2 text-3xl tracking-widest text-blue-500 md:text-5xl">
                  細節至上
                </h4>
              </div>
            </div>
            <div className="magazine-pic">
              <img
                src="https://picsum.photos/id/202/600/300"
                alt=""
                className="magazine-pic-img"
              />
            </div>
            <div className="magazine-paragraph">
              <div className="flex h-full items-center justify-center rounded-r-xl bg-amber-100 p-4 shadow-md md:rounded-r-3xl">
                <p className="break-words p-2 text-base leading-relaxed tracking-wider text-gray-700 md:text-2xl md:leading-10">
                  我們特別注重施工的整潔與細節，這是我們與眾不同的關鍵。
                  <br />
                  在每一次的安裝和維修服務中我們都會確保工作現場的整潔，不留下任何灰塵或垃圾。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagazineLayout;
