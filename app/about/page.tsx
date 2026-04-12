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
          <div className="text-[32px] font-bold text-white m-4">About Me 關於我</div>



          <div className="flex-col justify-around w-full h-full px-4">

            {/* 左邊 學校*/}
            {/* <div className="w-full h-full flex-col items-start px-4"> */}

            <div className=" bg-black border-4 border-fuchsia-700 flex-col justify-center items-start w-full rounded-4xl  mt-4"
            // style={{ backgroundImage: `url(green.png)` }}
            >
              <div className="text-[20px] font-bold flex justify-center items-center text-black bg-fuchsia-700 h-[50px] rounded-t-2xl w-full"
              // style={{ backgroundImage: `url(gold.png)` }}
              >
                學歷
              </div>

              {/* <div className="flex justify-around"> */}


              <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-[16px] font-medium text-amber-100 px-10 py-4">

                <div className="col-span-3 flex justify-start items-center">國立政治大學廣告學系學士班在讀中</div>
                <div className="col-span-3 flex justify-start items-center">私立日本大學交換生</div>
                <div className="col-span-3 flex justify-start items-center">預計就讀國立成功大學創意產業設計研究所碩士班</div>

              </div>

              {/* <Image src="/patten.png" alt="patten" width={30} height={30} /> */}


            </div>





            <div className=" bg-black border-4 border-fuchsia-700 flex-col justify-center items-start w-full rounded-4xl  mt-4"
            // style={{ backgroundImage: `url(green.png)` }}
            >
              <div className="text-[20px] font-bold flex justify-center items-center text-black bg-fuchsia-700 h-[50px] rounded-t-2xl w-full"
              // style={{ backgroundImage: `url(gold.png)` }}
              >
                社團經歷
              </div>

              {/* <div className="flex justify-around"> */}


              <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-[16px] font-medium text-amber-100 px-10 py-4">

                <div className="col-span-2 flex justify-start items-center">政大學生會公關部次長暨影音企劃組組長</div>
                <div className="col-span-2 flex justify-start items-center">政大易學社社長</div>
                <div className="col-span-2 flex justify-start items-center">政大西洋占星社社員</div>
                <div className="font-light flex items-center justify-end">2022-2023</div>
                <div className="font-light flex items-center justify-end">2026-</div>
                <div className="font-light flex items-center justify-end">2025-</div>
              </div>

              {/* <Image src="/patten.png" alt="patten" width={30} height={30} /> */}


            </div>


            <div className=" bg-black border-4 border-fuchsia-700 flex-col justify-center items-start w-full rounded-4xl mt-4"
            // style={{ backgroundImage: `url(green.png)` }}
            >
              <div className="text-[20px] font-bold flex justify-center items-center text-black bg-fuchsia-700 h-[50px] rounded-t-2xl w-full"
              // style={{ backgroundImage: `url(gold.png)` }}
              >
                工作經歷
              </div>

              {/* <div className="flex justify-around"> */}


              <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-2 text-[16px] font-medium text-amber-100 px-10 py-4 ">

                <div className="col-span-2 flex justify-start items-center">忠泰美術館教育推廣組實習生</div>
                <div className="col-span-2 flex justify-start items-center">股票博物館導覽員</div>
                <div className="col-span-2 flex justify-start items-center">經典公關專案助理</div>
                <div className="font-light flex items-center justify-end">2026-</div>
                <div className="font-light flex items-center justify-end">2025-</div>
                <div className="font-light flex items-center justify-end">2024</div>
              </div>

              {/* <Image src="/patten.png" alt="patten" width={30} height={30} /> */}


            </div>









          </div>


        </div>
      </div >
    </>

  );
}
