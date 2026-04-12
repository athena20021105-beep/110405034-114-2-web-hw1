import Image from "next/image";
import Link from "next/link";
import Menu from "@/component/Menu";

export default function About() {
  return (
    <>
      <div className="flex h-full">
        <>
          <Link href="/about" className="sm:hidden absolute top-2 left-2 bg-yellow-950 text-amber-100">
            返回首頁
          </Link>

          <div className="sm:block hidden">
            <Menu />
          </div>

        </>
        <div className="bg-fuchsia-950 w-full">
          <div className="text-[32px] font-bold">About Me 關於我</div>



          <div className="flex justify-around w-full h-full ">

            {/* 左邊 學校*/}
            <div className="w-full h-full flex-col items-start px-4">

              <div className="flex justify-center items-start flex-col h-[200px] w-full rounded-4xl mt-2">
                <div className="text-[20px] font-bold flex justify-center items-center text-amber-950 bg-amber-200 h-[50px] w-full rounded-2xl mt-2">
                  學歷
                </div>

                {/* <ul className="list-image-[url('/dot.png')]">
                  <li className="text-[16px] font-medium text-amber-200 flex justify-center mt-2">國立政治大學廣告學系學士班在讀中</li>
                  
                </ul> */}

                <div className="text-[16px] font-medium text-amber-200 flex justify-center mt-2">
                  - 國立政治大學廣告學系學士班在讀中
                </div>
                <div className="text-[16px] font-medium text-amber-200 flex justify-center mt-2">
                  - 私立日本大學交換生
                </div>
                <div className="text-[16px] font-medium text-amber-200 flex justify-center mt-2">
                  - 預計就讀國立成功大學創意產業設計研究所碩士班
                </div>
              </div>

              <div className=" bg-amber-950 flex-col justify-center items-start w-full rounded-4xl mt-2"
              // style={{ backgroundImage: `url(green.png)` }}
              >
                <div className="text-[20px] font-bold flex justify-center items-center text-amber-950 bg-amber-200 h-[50px] rounded-t-4xl w-full"
                // style={{ backgroundImage: `url(gold.png)` }}
                >
                  社團經歷
                </div>

                {/* <div className="flex justify-around"> */}


                <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 m-4">
                  
                  <div className="col-span-2 text-[16px] font-medium text-amber-200 flex justify-start items-center">政大學生會公關部次長暨影音企劃組組長</div>
                  <div className="col-span-2 text-[16px] font-medium text-amber-200 flex justify-start items-center">政大易學社社長</div>
                  <div className="col-span-2 text-[16px] font-medium text-amber-200 flex justify-start items-center">政大西洋占星社社員</div>
                  <div className="text-[16px] font-light text-amber-200 flex items-center justify-end">2022-2023</div>
                  <div className="text-[16px] font-light text-amber-200 flex items-center justify-end">2026-</div>
                  <div className="text-[16px] font-light text-amber-200 flex items-center justify-end">2025-</div>
                </div>

                <Image src="/patten.png" alt="patten" width={30} height={30} />


              </div>





            </div>
            {/* 右邊 工作*/}
            <div className="flex justify-center items-start flex-col h-[200px] w-full rounded-4xl px-4">
              <div className="text-[20px] font-bold flex justify-center items-center text-amber-950 bg-amber-200 h-[50px] w-full rounded-2xl">
                工作經歷
              </div>
              <div className="flex justify-between mt-2">
                <div className=" text-[16px] font-medium text-amber-200 flex justify-start items-center">忠泰美術館教育推廣組實習生</div>
                <div className=" text-[12px] font-light text-amber-200 flex justify-end items-center">2026-</div>
              </div>
              <div className="flex justify-between mt-2">
                <div className=" text-[16px] font-medium text-amber-200 flex justify-start items-center">股票博物館導覽員</div>
                <div className=" text-[12px] font-light text-amber-200 flex justify-end items-center">2025-</div>
              </div>
              <div className="flex justify-between mt-2">
                <div className=" text-[16px] font-medium text-amber-200 flex justify-start items-center">經典公關專案助理</div>
                <div className=" text-[12px] font-light text-amber-200 flex justify-end items-center">2024</div>
              </div>


            </div>



          </div>


        </div>
      </div >
    </>

  );
}
