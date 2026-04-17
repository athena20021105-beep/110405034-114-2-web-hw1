"use client"

import Menu from "@/component/Menu";
import Link from "next/link";
import { MdFace2 } from "react-icons/md";
import { MdFace3 } from "react-icons/md";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { MdFace6 } from "react-icons/md";

export default function Hobby() {

  let projectData = {
    "1": {
      "name": "作為一個神祕少女",
      "imageUrl": "/Cafe.png"
    },
    "1-1": {
      "name": "塔羅",
      "imageUrl": "/tarot.jpg"
    },
    "1-2": {
      "name": "雷諾曼牌",
      "imageUrl": "/lenormand.jpg"
    },
    "1-3": {
      "name": "紫微斗數",
      "imageUrl": "/ZiWei.png"
    },
    "1-4": {
      "name": "人相學",
      "imageUrl": "/lenormand.jpg"
    },
    "2": {
      "name": "作為一個文藝少女"
    },
    "2-1": {
      "name": "手作黏土吊飾",
      "imageUrl": "/handcraft.jpg"
    },
    "2-2": {
      "name": "鋼筆 & 墨水",
      "imageUrl": "/Ink.jpg"
    },
    "2-3": {
      "name": "文物修復：全色",
      "imageUrl": "/OpenProcessing.png"
    },
    "3": {
      "name": "作為一個宅系少女",
      "imageUrl": "/Cafe.png"
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
          <div className="bg-[url(/blue.png)] bg-cover bg-center bg-fixed flex-col w-full h-full p-3">
            <div className="text-[32px] font-bold text-white font-['Noto_Serif_TC'] flex justify-center mt-10">
              Hobby 我的興趣
            </div>
            <div className="text-[18px] tracking-widest font-medium text-cyan-200 font-['Noto_Serif_TC'] flex justify-center items-center w-full bg-black/20 py-2">
              這裡收錄我各式各樣的興趣
            </div>

            <div className="flex justify-center items-center w-full h-[30px] my-8">
              <div className="flex justify-center items-center w-[320px] h-[30px] rounded-2xl backdrop-blur-sm inset-shadow-black inset-shadow-sm text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px]">
                {projectData["1"]["name"]}
              </div>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-1 gap-4 m-[26px]">



              <div className="flex justify-center w-full col-span-1 h-[300px] relative bg-black/20 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10">
                <div className="flex-col justify-center items-center h-full w-full p-2">
                  <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">{projectData["1-1"]["name"]}</div>
                  <div className="flex justify-center items-center w-full h-full bg-cover bg-center rounded-2xl shadow-lg shadow-black"
                    style={{ backgroundImage: `url(${projectData["1-1"]["imageUrl"]})` }}>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full col-span-1 h-[300px] relative bg-black/20 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10">
                <div className="flex-col justify-center items-center h-full w-full p-2">
                  <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">{projectData["1-2"]["name"]}</div>
                  <div className="flex justify-center items-center w-full h-full bg-cover bg-center rounded-2xl shadow-lg shadow-black"
                    style={{ backgroundImage: `url(${projectData["1-2"]["imageUrl"]})` }}>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full col-span-1 h-[300px] relative bg-black/20 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10">
                <div className="flex-col justify-center items-center h-full w-full p-2">
                  <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">{projectData["1-3"]["name"]}</div>
                  <div className="flex justify-center items-center w-full h-full bg-cover bg-center rounded-2xl shadow-lg shadow-black"
                    style={{ backgroundImage: `url(${projectData["1-3"]["imageUrl"]})` }}>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full col-span-1 h-[300px] relative bg-black/20 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10">
                <div className="flex-col justify-center items-center h-full w-full p-2">
                  <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">{projectData["1-4"]["name"]}</div>
                  <div className="flex justify-center items-center w-full h-full rounded-2xl shadow-lg shadow-black bg-black/5 backdrop-blur-sm">
                    <div className="grid grid-cols-2 w-full h-full">
                      <MdFaceRetouchingNatural className="fill-cyan-200 flex justify-center items-center w-full h-full p-4" />
                      <MdFace3 className="fill-cyan-200 flex justify-center items-center w-full h-full p-4" />
                      <MdFace6 className="fill-cyan-200 flex justify-center items-center w-full h-full p-4" />
                      <MdFace2 className="fill-cyan-200 flex justify-center items-center w-full h-full p-4" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex justify-center items-center w-full h-[30px] my-8">
              <div className="flex justify-center items-center w-[320px] h-[30px] rounded-2xl backdrop-blur-sm inset-shadow-black inset-shadow-sm text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px]">
                {projectData["2"]["name"]}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 m-[26px]">



              <div className="flex justify-center w-full col-span-1 h-[300px] relative bg-black/20 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10">
                <div className="flex-col justify-center items-center h-full w-full p-2">
                  <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">{projectData["2-1"]["name"]}</div>
                  <div className="flex justify-center items-center w-full h-full bg-cover bg-center rounded-2xl shadow-lg shadow-black"
                    style={{ backgroundImage: `url(${projectData["2-1"]["imageUrl"]})` }}>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-full col-span-1 h-[300px] relative bg-black/20 inset-shadow-sm inset-shadow-black rounded-2xl px-4 pb-10">
                <div className="flex-col justify-center items-center h-full w-full p-2">
                  <div className="text-white font-['Noto_Serif_TC'] font-extralight tracking-widest text-[16px] flex justify-center items-center h-8">{projectData["2-2"]["name"]}</div>
                  <div className="flex justify-center items-center w-full h-full bg-cover bg-center rounded-2xl shadow-lg shadow-black"
                    style={{ backgroundImage: `url(${projectData["2-2"]["imageUrl"]})` }}>
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