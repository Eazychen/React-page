import React from "react";

const MagazineLayout = () => {
  return (
    <div>
      <div className="bg-grey-color">
        <div className="mx-56 px-6 pb-10">
          <div className="grid grid-cols-4 grid-rows-4 gap-5">
            <div className="col-span-2 col-start-2 row-span-1 row-start-1">
              <div className="flex h-full items-center justify-center">
                <h3 className="p-4 text-6xl tracking-widest">我們的理念</h3>
              </div>
            </div>
            <div className="bg-story-color col-span-2 col-start-1 row-span-1 row-start-2 rounded-r-3xl p-2">
              <div className="flex h-full items-center justify-center">
                <h4 className="p-2 text-5xl tracking-widest">以人為本</h4>
              </div>
            </div>
            <div className="col-span-2 col-start-2 row-span-1 row-start-3 ">
              <img
                src="https://picsum.photos/id/202/600/300"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="bg-story-color col-span-2 col-start-3 row-span-1 row-start-4 rounded-r-3xl p-2">
              <div className="flex h-full items-center justify-center ">
                <p className="break-all p-4 text-xl leading-10 tracking-wider">
                  我們深知電器不僅是日常生活中的工具，
                  <br />
                  更是提升生活品質的重要夥伴。
                  <br />
                  自創立以來一直秉持著「以人為本」的核心理念，
                  <br />
                  致力於為每一位顧客提供最優質的服務體驗。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-56 px-6 py-10">
          <div className="grid grid-cols-4 grid-rows-4 gap-5">
            <div className="col-span-2 col-start-2 row-span-1 row-start-1">
              <div className="flex h-full items-center justify-center">
                <h3 className="p-4 text-6xl tracking-widest">我們的堅持</h3>
              </div>
            </div>
            <div className="bg-story-color col-span-2 col-start-3 row-span-1 row-start-2 rounded-l-3xl p-2">
              <div className="flex h-full items-center justify-center">
                <h4 className="p-2 text-5xl">細節至上</h4>
              </div>
            </div>
            <div className="col-span-2 col-start-2 row-span-1 row-start-3">
              <img
                src="https://picsum.photos/id/202/600/300"
                alt=""
                className="w-full object-cover"
              />
            </div>
            <div className="bg-story-color col-span-2 col-start-1 row-span-1 row-start-4 rounded-l-3xl p-2">
              <div className="flex h-full items-center justify-center">
                <p className="break-all p-4 text-xl leading-10 tracking-widest">
                  我們特別注重施工的整潔與細節，
                  <br />
                  這是我們與眾不同的關鍵。
                  <br />
                  在每一次的安裝和維修服務中，
                  <br />
                  我們都會確保工作現場的整潔，
                  <br />
                  不留下任何灰塵或垃圾。
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
