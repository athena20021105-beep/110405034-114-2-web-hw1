"use client"

import Menu from "@/component/Menu";
import Link from "next/link";

export default function DCT() {

  let projectData = {
    "1": {
      "name": "生成式藝術"
    },
    "1-1": {
      "name": "點選看我的上鏈作品：天裂之後",
      "imageUrl": "/OBJKT.png",
      "link": "https://objkt.com/tokens/open_objkt/25545"
    },
    "1-2": {
      "name": "點選看我的 Matters 帳號",
      "imageUrl": "/Matters.png",
      "link": "https://matters.town/@athena20021105"
    },
    "1-3": {
      "name": "點選看我的 OpenProcessing 帳號",
      "imageUrl": "/OpenProcessing.png",
      "link": "https://openprocessing.org/user/549289#sketches"
    },
    "2": {
      "name": "網頁遊戲 - 被監視的咖啡廳",
      "imageUrl": "/Cafe.png",
      "link": "https://fengyenchia.github.io/js_final_project/public/00/"
    },
  };

  return (
    <>
      <div className="flex min-h-screen w-full">
        <>
          <Link href="/" className="sm:hidden absolute top-2 left-2 text-white font-['Noto_Serif_TC'] inset-shadow-sm inset-shadow-black p-2 rounded-4xl flex justify-end">
            返回首頁
          </Link>

          <div className="sm:block hidden">
            <Menu />
          </div>

        </>
        <div className="bg-purple-200 w-full">
          <div className="bg-[url(/blue.png)] bg-cover bg-center bg-fixed w-full h-full p-3">
            <div className="text-[32px] font-bold text-white font-['Noto_Serif_TC'] flex justify-center mt-10">DTC 數位內容</div>
            <div className="text-[16px] font-light text-cyan-200 font-['Noto_Serif_TC'] flex justify-center bg-blue-950/30 py-2">這裡收錄我學習數位內容時製作的專案</div>

            <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 m-[26px]">


              <div
                className={`inset-shadow-black inset-shadow-sm rounded-2xl h-100 flex items-center 
                col-span-3 bg-center bg-cover relative overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-pl-3`}
              >

                {/* 左邊標籤 */}
                <div className="bg-[url(/colorful.png)] bg-cover bg-center opacity-70 saturate-300 brightness-110 h-full w-[80px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute left-0 z-20                  
                ">
                  <div className="[writing-mode:vertical-rl] text-cyan-950 font-bold text-[20px] font-['Noto_Serif_TC']">
                    {projectData["1"].name}
                  </div>
                </div>

                {/* 可滑動區 */}
                <div className="h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth">

                  {/* 橫向內容 */}
                  <div className="flex gap-4 h-full pl-[100px] pr-4 items-center">

                    <div className="snap-center shrink-0 w-[80vw] sm:w-[640px] h-[360px] rounded-2xl bg-cover bg-center">

                      <div className="relative w-full h-[240px] sm:h-[360px] rounded-2xl overflow-hidden">

                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${projectData["1-1"].imageUrl})` }}
                        />

                        <Link href={projectData["1-1"].link} className="absolute bottom-2 right-2 text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
        bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                          {projectData["1-1"].name}
                        </Link>

                      </div>

                    </div>

                    <div className="snap-center shrink-0 w-[80vw] sm:w-[640px] h-[360px] rounded-2xl bg-cover bg-center">

                      <div className="relative w-full h-[240px] sm:h-[360px] rounded-2xl overflow-hidden">

                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${projectData["1-2"].imageUrl})` }}
                        />

                        <Link href={projectData["1-2"].link} className="absolute bottom-2 right-2 text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
        bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                          {projectData["1-2"].name}
                        </Link>

                      </div>

                    </div>

                    <div className="snap-center shrink-0 w-[80vw] sm:w-[640px] h-[360px] rounded-2xl bg-cover bg-center">

                      <div className="relative w-full h-[240px] sm:h-[360px] rounded-2xl overflow-hidden">

                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${projectData["1-3"].imageUrl})` }}
                        />

                        <Link href={projectData["1-3"].link} className="absolute bottom-2 right-2 text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
        bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                          {projectData["1-3"].name}
                        </Link>

                      </div>

                    </div>



                  </div>
                </div>
              </div>



              <div
                className={`bg-cyan-950 inset-shadow-black inset-shadow-sm rounded-2xl h-100 flex justify-center items-center 
                col-span-3 bg-center bg-cover relative overflow-hidden`}
                style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}
              >

                <div className="bg-[url(/colorful.png)] bg-cover bg-center opacity-70 saturate-300 brightness-110 h-full w-[80px] flex 
                                  justify-center items-center backdrop-blur-sm
                                  absolute left-0                  
                ">
                  <div className="text-cyan-950 tracking-widest font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-amber-50 font-bold text-[20px] [writing-mode:vertical-rl] opacity-150 saturate-70 brightness-90">{projectData["2"]["name"]}</div>

                </div>

                <Link href={projectData["2"].link} className="absolute bottom-4 right-4 text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
        bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                          {projectData["2"].name}
                        </Link>

                {/* <div className="text-red-500 text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">中心點</div> */}
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
