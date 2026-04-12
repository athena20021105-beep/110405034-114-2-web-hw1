"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

export default function Menu() {
  
  return (
    <>
      <div className="bg-white w-[320px] h-full p-4">

        <Link href="/">  
            HOME
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-gray-200 w-[80px] h-[80px] rounded-full overflow-hidden flex justify-center items-center">
            <Image src="/cat.png" alt="cat" width={80} height={80} />
          </div>
        </div>

        <div className="text-center">張雅媗</div>
        <div className="text-center">跨領域設計者，結合行銷策略規劃、數位/互動設計與展覽策劃。</div>

        <div className="flex gap-2">

          <div className="bg-gray-200 w-full h-[80px] rounded-full overflow-hidden flex justify-center items-center m-auto">
            <div className="bg-gray-200 w-[50px] h-[50px] rounded-full overflow-hidden flex justify-around items-center m-auto">
              <Link href="/https://www.instagram.com/athenachang1105/">
                <Image src="/IG.webp" alt="Me" width={50} height={50} />
              </Link>
            </div>
            <Link href="/https://www.facebook.com/profile.php?id=100002500904193">
              <Image src="/fb.png" alt="Me" width={50} height={50} />
            </Link>
            <Link href="/https://www.threads.com/@athenachang1105">
              <Image src="/Thread.jpg" alt="Me" width={50} height={50} />
            </Link>
          </div>


        </div>


        <Link href="/about">
          <div className="bg-gray-300 p-[16px] rounded-md">關於我</div>
        </Link>

        <Link href="/hobby">
          <div className="bg-gray-300 p-[16px] mt-2 rounded-md">我的興趣</div>
        </Link>

        <Link href="/design-project">
          <div className="bg-gray-300 p-[16px] mt-2 rounded-md">設計專案</div>
        </Link>

        <Link href="/programming-project">
          <div className="bg-gray-300 p-[16px] mt-2 rounded-md">程式專案</div>
        </Link>


        </div>
    </>
  );
}
