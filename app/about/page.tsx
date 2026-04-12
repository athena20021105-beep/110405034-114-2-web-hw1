import Image from "next/image";
import Link from "next/link";
import Menu from "@/component/Menu";

export default function About() {
  return (
    <>
      <div className="flex h-full">
        <>
          <Link href="/about" className="sm:hidden absolute top-2 left-2 bg-white">
            返回首頁
          </Link>

          <div className="sm:block hidden">
            <Menu />
          </div>

        </>
        <div className="bg-blue-300 w-full">
          <div className="text-[32px] font-bold">About 關於我</div>

          <div className="justify-around">

            {/* 左邊 學校*/}
            <div className="w-full/2 h-full/3 items-start">
              <div className="text-[20px] font-bold justify-center items-center text-white bg-cyan-700 h-[50px] w-full rounded-2xl mt-2">
                學歷
              </div>
              <div className="text-[16px] font-medium text-white bg-cyan-200 h-[120px] w-full rounded-2xl mt-2">
                國立政治大學廣告學系學士班在讀中
              </div>
              <div className="text-[16px] font-medium text-white bg-cyan-200 h-[120px] w-full rounded-2xl mt-2">
                私立日本大學交換生
              </div>
              <div className="text-[16px] font-medium text-gray-600">
                預計就讀國立成功大學創意產業設計研究所碩士班
              </div>

              <div className="text-[28px] font-bold text-white bg-cyan-700 h-[120px] w-full rounded-2xl items-center mt-4">
                社團經歷
              </div>

              <div className=" bg-cyan-700 h-[120px] w-full rounded-2xl mt-2">
                <div className=" text-[16px] font-medium text-white justify-start items-center">政大學生會公關部次長暨影音企劃組組長</div>
                <div className=" text-[12px] font-light text-white justify-end items-center">2022-2023</div>
              </div>

              <div className=" bg-cyan-700 h-[120px] w-full rounded-2xl mt-2">
                <div className=" text-[16px] font-medium text-white justify-start items-center">政大易學社社長</div>
                <div className=" text-[12px] font-light text-white justify-end items-center">2026-</div>
              </div>

            </div>
            {/* 右邊 工作*/}
            <div className="w-full/2 h-full/3 items-start mt-2">
              <div className="text-[28px] font-bold text-white bg-cyan-700 h-[120px] w-full rounded-2xl mt-2">
                工作經歷
              </div>

              <div className=" bg-cyan-700 h-[120px] w-full rounded-2xl mt-2">
                <div className=" text-[16px] font-medium text-white justify-start items-center">忠泰美術館教育推廣組實習生</div>
                <div className=" text-[12px] font-light text-white justify-end items-center">2026-</div>
              </div>

              <div className=" bg-cyan-700 h-[120px] w-full rounded-2xl mt-2">
                <div className=" text-[16px] font-medium text-white justify-start items-center">股票博物館導覽員</div>
                <div className=" text-[12px] font-light text-white justify-end items-center">2025-</div>
              </div>

              <div className=" bg-cyan-700 h-[120px] w-full rounded-2xl mt-2">
                <div className=" text-[16px] font-medium text-white justify-start items-center">經典公關專案助理</div>
                <div className=" text-[12px] font-light text-white justify-end items-center">2024</div>
              </div>

            </div>


          </div>


        </div>
      </div>
    </>

  );
}
