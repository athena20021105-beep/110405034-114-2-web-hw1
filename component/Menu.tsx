"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

export default function Menu() {
  
  return (
    <>
      <div className="bg-black w-[320px] h-full p-4">

        <Link href="/" className="text-white">  
            HOME
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/me.jpeg" alt="Me" width={80} height={80} />
          </div>
        </div>

        <div className="text-center text-fuchsia-700 text-[28px] font-bold">張雅媗</div>
        <div className="text-center text-amber-100 text-[16px]">跨領域設計者，結合行銷策略規劃、數位/互動設計與展覽策劃。</div>

        <div className="flex gap-8 justify-center m-4">

          {/* <div className="w-full h-[80px] rounded-full overflow-hidden flex justify-center items-center m-auto gap-8"> */}
            <div className="bg-black w-[30px] h-[30px] rounded-full overflow-hidden flex justify-around items-center m-auto">
              <Link href="/https://www.instagram.com/athenachang1105/">
                <Image src="/IG.webp" alt="IG" width={30} height={30} />
              </Link>
            </div>
            <div className="bg-black w-[30px] h-[30px] rounded-full overflow-hidden flex justify-around items-center m-auto">
            <Link href="/https://www.facebook.com/profile.php?id=100002500904193">
              <Image src="/fb.png" alt="FB" width={30} height={30} />
            </Link>
            </div>
            <div className="bg-black w-[30px] h-[30px] rounded-full overflow-hidden flex justify-around items-center m-auto">
            <Link href="/https://www.threads.com/@athenachang1105">
              <Image src="/Thread.webp" alt="Thread" width={30} height={30} />
            </Link>
            </div>
          {/* </div> */}


        </div>


        <Link href="/about">
          <div className="bg-fuchsia-300 p-[16px] rounded-md">關於我</div>
        </Link>

        <Link href="/hobby">
          <div className="bg-amber-100 p-[16px] mt-2 rounded-md">我的興趣</div>
        </Link>

        <Link href="/design-project">
          <div className="bg-fuchsia-300 p-[16px] mt-2 rounded-md">設計專案</div>
        </Link>

        <Link href="/programming-project">
          <div className="bg-amber-100 p-[16px] mt-2 rounded-md">程式專案</div>
        </Link>


        </div>
    </>
  );
}
