import Image from "next/image";
import Link from "next/link";
import Menu from "@/component/Menu";

export default function About() {
  return (
    <>
      <div className="flex min-h-screen w-full relative">
        <>
          <Link href="/" className="sm:hidden z-50 absolute top-2 left-2 text-lime-800 font-bold font-['Noto_Serif_TC'] backdrop-blur-sm inset-shadow-sm inset-shadow-black p-2 rounded-4xl flex justify-end">
            返回首頁
          </Link>

          <div className="sm:block hidden fixed z-50 h-full">
            <Menu />
          </div>

        </>
        <div className="bg-[url(/softGreen.png)] bg-yellow-50 saturate-140 bg-cover bg-center bg-fixed w-full sm:ml-[320px] h-full p-4">
          <div className="text-[32px] font-bold text-lime-800 font-['Noto_Serif_TC'] flex justify-center m-8 mt-10">
            About Me 關於我
          </div>



          <div className="flex-col justify-around w-full h-full px-4">


            <div className="md:block hidden">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">


                <div className="overflow-hidden row-span-2 bg-[url(/MeInAbout.jpg)] bg-gray-300 border-2 border-white bg-cover bg-center bg-scroll flex justify-center items-center h-full w-full rounded-4xl">
                </div>


                <div className=" bg-[url(/silverBG.png)] bg-gray-300 bg-cover bg-center bg-scroll border-2 contrast-150 brightness-80 col-span-1 text-blue-950 font-['Noto_Serif_TC'] flex-col justify-center items-center h-full w-full rounded-4xl">
                  <div className="text-[20px] font-bold backdrop-blur-2xl flex justify-center items-center h-[50px] rounded-t-4xl w-full">
                    學歷
                  </div>

                  <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-[16px] font-medium px-10 py-4">

                    <div className="col-span-3 flex justify-center items-center">國立政治大學廣告學系學士班在讀中</div>
                    <div className="col-span-3 flex justify-center items-center">私立日本大學交換生</div>
                    <div className="col-span-3 flex justify-center items-center">預計就讀國立成功大學創意產業設計研究所碩士班</div>

                  </div>
                </div>
                <div className=" bg-[url(/silverBG.png)] bg-gray-300 bg-cover bg-center bg-scroll border-2 contrast-150 brightness-80 text-blue-950 font-['Noto_Serif_TC'] flex-col justify-center items-center h-full w-full rounded-4xl">
                  <div className="text-[20px] font-bold backdrop-blur-2xl flex justify-center items-center h-[50px] rounded-t-4xl w-full">
                    外語
                  </div>

                  <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-[16px] font-medium px-10 py-4">

                    <div className="col-span-3 flex justify-center items-center">英文</div>
                    <div className="col-span-3 flex justify-center items-center">日文</div>

                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex-col">


                <div className="overflow-hidden bg-[url(/MeInAbout.jpg)] bg-gray-300 border-2 border-white bg-cover bg-center bg-scroll flex justify-center items-center h-[300px] w-full rounded-4xl mt-4">

                </div>


                <div className=" bg-[url(/silverBG.png)] bg-gray-300 bg-cover bg-center bg-scroll border-2 contrast-150 brightness-80 text-blue-950 font-['Noto_Serif_TC'] flex-col justify-center items-center h-full w-full rounded-4xl  mt-4">
                  <div className="text-[20px] font-bold backdrop-blur-2xl flex justify-center items-center h-[50px] rounded-t-4xl w-full">
                    學歷
                  </div>

                  <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-[16px] font-medium px-10 py-4">

                    <div className="col-span-3 flex justify-center items-center">國立政治大學廣告學系學士班在讀中</div>
                    <div className="col-span-3 flex justify-center items-center">私立日本大學交換生</div>
                    <div className="col-span-3 flex justify-center items-center">預計就讀國立成功大學創意產業設計碩士班</div>

                  </div>
                </div>
                <div className=" bg-[url(/silverBG.png)] bg-gray-300 bg-cover bg-center bg-scroll border-2 contrast-150 brightness-80 text-blue-950 font-['Noto_Serif_TC'] flex-col justify-center items-center h-full w-full rounded-4xl  mt-4">
                  <div className="text-[20px] font-bold backdrop-blur-2xl flex justify-center items-center h-[50px] rounded-t-4xl w-full">
                    外語
                  </div>

                  <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-[16px] font-medium px-10 py-4">

                    <div className="col-span-3 flex justify-center items-center">英文 雅思 7 分</div>
                    <div className="col-span-3 flex justify-center items-center">日文 日檢 N2</div>

                  </div>
                </div>
              </div>
            </div>


            <div className=" bg-[url(/silverBG.png)] bg-gray-300 bg-cover bg-center bg-scroll contrast-150 brightness-80 border-2  flex-col justify-center items-start w-full rounded-4xl  mt-4">

              <div className="text-[20px] font-bold flex justify-center items-center backdrop-blur-2xl text-blue-950 font-['Noto_Serif_TC'] h-[50px] rounded-t-4xl w-full">
                社團經歷
              </div>

              <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-2 text-[16px] text-blue-950 font-['Noto_Serif_TC'] font-medium px-10 py-4">
                <div className="col-span-2 flex justify-start items-center">政大學生會公關部次長暨影音企劃組組長</div>
                <div className="col-span-2 flex justify-start items-center">政大易學社社長</div>
                <div className="col-span-2 flex justify-start items-center">政大西洋占星社社員</div>
                <div className="font-light flex items-center justify-end">2022-2023</div>
                <div className="font-light flex items-center justify-end">2026-</div>
                <div className="font-light flex items-center justify-end">2025-</div>
              </div>

            </div>

            <div className=" bg-[url(/silverBG.png)] bg-gray-300 bg-cover bg-center bg-scroll contrast-150 brightness-80 border-2  flex-col justify-center items-start w-full rounded-4xl  mt-4">

              <div className="text-[20px] font-bold flex justify-center items-center backdrop-blur-2xl text-blue-950 font-['Noto_Serif_TC'] h-[50px] rounded-t-4xl w-full">
                工作經歷
              </div>

              <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-4 gap-2 text-[16px] text-blue-950 font-['Noto_Serif_TC'] font-medium px-10 py-4">
                <div className="col-span-2 flex justify-start items-center">忠泰美術館教育推廣組實習生</div>
                <div className="col-span-2 flex justify-start items-center">股票博物館導覽員</div>
                <div className="col-span-2 flex justify-start items-center">經典公關專案助理</div>
                <div className="font-light flex items-center justify-end">2026-</div>
                <div className="font-light flex items-center justify-end">2025-</div>
                <div className="font-light flex items-center justify-end">2024</div>
              </div>

            </div>



          </div>
          <div className="h-10"></div>

        </div>
      </div >
    </>

  );
}
