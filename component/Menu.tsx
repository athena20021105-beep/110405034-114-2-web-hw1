"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

export default function Menu() {
  
  return (
    <>
      <div className="bg-[url(/colorful.png)] bg-cover bg-center bg-scroll saturate-105 brightness-105 w-[320px] h-full p-4">
      
        

        <Link href="/" className="text-mauve-700 inset-shadow-sm inset-shadow-mauve-400 backdrop-blur-2xl rounded-4xl p-2">  
            HOME
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200  drop-shadow-md drop-shadow-gray-380 w-[90px] h-[90px] rounded-full border-2 border-white overflow-hidden flex justify-center items-center">
            <Image src="/me.jpeg" alt="Me" width={80} height={80} />
          </div>
        </div>

        <div className="text-center font-['Noto_Serif_TC'] text-fuchsia-950 text-[28px] font-extrabold mt-2">張雅媗</div>
        <div className="text-center font-['Noto_Serif_TC'] text-mauve-700 text-[16px]">跨領域設計者，結合行銷策略規劃、數位/互動設計與展覽策劃。</div>

        <div className="flex gap-8 justify-center m-4">

          {/* <div className="w-full h-[80px] rounded-full overflow-hidden flex justify-center items-center m-auto gap-8"> */}
            <div className=" w-[30px] h-[30px] rounded-full overflow-hidden flex justify-around items-center m-auto">
              <Link href="https://www.instagram.com/athenachang1105/">
                <Image src="/IG.webp" alt="IG" width={30} height={30} />
              </Link>
            </div>
            <div className=" w-[30px] h-[30px] rounded-full overflow-hidden flex justify-around items-center m-auto">
            <Link href="https://www.facebook.com/profile.php?id=100002500904193">
              <Image src="/fb.png" alt="FB" width={30} height={30} />
            </Link>
            </div>
            <div className=" w-[30px] h-[30px] rounded-full overflow-hidden flex justify-around items-center m-auto">
            <Link href="https://www.threads.com/@athenachang1105">
              <Image src="/Thread.webp" alt="Thread" width={30} height={30} />
            </Link>
            </div>
          {/* </div> */}


        </div>


        <Link href="/about">
          <div className="bg-white/20 backdrop-blur-sm hover:bg-[url(/blue.png)] hover:bg-cover hover:bg-center hover:scale-102 hover:text-white border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 flex justify-center items-center">關於我</div>
        </Link>

        <Link href="/hobby">
          <div className="bg-white/20 backdrop-blur-sm hover:scale-102 border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 drop-shadow-md flex justify-center items-center">我的興趣</div>
        </Link>

        <Link href="/DTC">
          <div className="bg-white/20 backdrop-blur-sm hover:scale-102 border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 drop-shadow-md flex justify-center items-center">數位內容</div>
        </Link>

        <Link href="/marketing">
          <div className="bg-white/20 backdrop-blur-sm hover:scale-102 border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 drop-shadow-md flex justify-center items-center">行銷專案</div>
        </Link>


        </div>
    </>
  );
}
