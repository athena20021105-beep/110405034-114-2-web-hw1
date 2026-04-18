"use client"

import Menu from "@/component/Menu";
import Link from "next/link";

export default function ProgrammingProject() {

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
      "link": "https://fengyenchia.github.io/js_final_project/public/00/",
      "botton": "點擊進入遊戲"
    },
  };

  return (
    <>
      <div className="flex min-h-screen w-full">
        <>
          <Link href="/" className="sm:hidden absolute top-2 left-2 text-white font-['Noto_Serif_TC'] inset-shadow-sm inset-shadow-black p-2 rounded-4xl flex justify-end">
            返回首頁
          </Link>

          <div className="sm:block hidden fixed z-50 h-full">
            <Menu />
          </div>

        </>
        <div className="bg-blue-950 w-full">
          <div className="bg-[url(/blueDark.png)] bg-cover bg-center bg-fixed h-full sm:ml-[320px] p-3">
            <div className="text-[32px] font-bold text-white font-['Noto_Serif_TC'] flex justify-center mt-10">Programming Project 程式設計</div>
            <div className="text-[18px] tracking-widest font-medium text-cyan-200 font-['Noto_Serif_TC'] flex justify-center items-center w-full bg-black/20 py-2">
              這裡收錄我的程式設計專案
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 m-[26px]">

              <div className="flex-col justify-center w-full col-span-3 h-[480px] bg-black/50 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10 bg-center bg-cover relative">
                <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">
                  <div className="bg-blue-400/20 inset-shadow-sm inset-shadow-black rounded-2xl px-8">
                    {projectData["1"]["name"]}
                  </div>

                </div>
                <div className="h-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scroll-pl-3">
                  <div className="flex-col justify-center items-center h-full w-full p-2">

                    {/* 橫向內容 */}


                    <div className="flex gap-4 h-full pr-4 items-center">



                      <div className="snap-center shrink-0 w-[80vw] sm:w-[640px] h-full rounded-2xl bg-cover bg-center">

                        <div className="relative flex justify-center w-full h-full rounded-2xl overflow-hidden">

                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${projectData["1-1"].imageUrl})` }}
                          />

                          <Link href={projectData["1-1"].link} className="absolute bottom-2 flex justify-center text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
        bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                            {projectData["1-1"].name}
                          </Link>

                        </div>

                      </div>




                      <div className="snap-center shrink-0 w-[80vw] sm:w-[640px] h-full rounded-2xl bg-cover bg-center">

                        <div className="relative flex justify-center w-full h-full rounded-2xl overflow-hidden">

                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${projectData["1-2"].imageUrl})` }}
                          />

                          <Link href={projectData["1-2"].link} className="absolute bottom-2 flex justify-center text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
        bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                            {projectData["1-2"].name}
                          </Link>

                        </div>

                      </div>



                      <div className="snap-center shrink-0 flex justify-center w-[80vw] sm:w-[640px] h-full rounded-2xl bg-cover bg-center">

                        <div className="relative flex justify-center w-full h-full rounded-2xl overflow-hidden">

                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${projectData["1-3"].imageUrl})` }}
                          />


                          <Link href={projectData["1-3"].link} className="absolute bottom-2 flex justify-center text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
        bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                            {projectData["1-3"].name}
                          </Link>



                        </div>

                      </div>


                    </div>
                  </div>
                </div>
              </div>



              <div className="flex justify-center w-full col-span-3 h-[400px] relative bg-black/50 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10">
                <div className="flex-col justify-center items-center h-full w-full px-2">
                  <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">
                    <div className="bg-blue-400/20 inset-shadow-sm inset-shadow-black rounded-2xl px-8">
                      {projectData["2"]["name"]}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full h-full bg-cover bg-center rounded-2xl relative shadow-lg shadow-black"
                    style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})` }}>
                    <Link href={projectData["2"].link} className="absolute bottom-2 flex justify-center text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-cyan-950 ring-2 ring-white 
bg-cyan-950/50 backdrop-saturate-300 backdrop-brightness-110 backdrop-blur-sm rounded-4xl text-white/70 text-[16px] font-extrabold p-2 px-8">
                      {projectData["2"].botton}
                    </Link>
                  </div>
                </div>
              </div>




            </div>
          </div>
        </div>
      </div>

    </>
  );
}
