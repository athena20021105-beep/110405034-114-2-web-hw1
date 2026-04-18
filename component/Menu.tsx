"use client"
import Image from "next/image"
import Link from "next/link";
import { TbActivity } from "react-icons/tb";

export default function Menu() {

  return (
    <>
      {/* <div className="flex min-h-screen w-[320px]"> */}
      <div className="bg-[url(/colorful.png)] bg-purple-200 bg-cover bg-center bg-scroll saturate-90 brightness-105 flex-col justify-center w-[320px] h-full p-4 pb-7">
        {/* <div className="bg-[url(/colorful.png)] bg-cover bg-center bg-fixed w-full h-full"> */}




        <Link href="/" className="text-mauve-600 inset-shadow-sm inset-shadow-mauve-600 bg-fuchsia-950/10 backdrop-saturate-300 backdrop-brightness-105 rounded-4xl p-2">
          HOME
        </Link>

        <div className="flex justify-center items-center w-full">
          <div className="bg-pink-100  drop-shadow-md drop-shadow-gray-380 w-[90px] h-[90px] rounded-full border-2 border-white overflow-hidden flex justify-center items-center">
            <Image src="/me.jpeg" alt="Me" width={80} height={80} />
          </div>
        </div>




        <div className="sm:hidden text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-fuchsia-950 ring-2 ring-white 
        bg-[url(/softGreen.png)] bg-cover bg-center hue-rotate-350 saturate-120 brightness-70 contrast-250 backdrop-saturate-300 backdrop-brightness-110 rounded-4xl text-white text-[28px] font-extrabold m-4 mx-20">
          <div className="drop-shadow-lg drop-shadow-black/40">張雅媗</div>
        </div>

        <Link href="/" className="text-center font-['Noto_Serif_TC'] drop-shadow-lg drop-shadow-fuchsia-950 ring-2 ring-white 
        bg-white/20 hover:bg-[url(/softGreen.png)] bg-cover bg-center hover:hue-rotate-350 hover:saturate-120 hover:brightness-70 hover:contrast-250 sm:block hidden backdrop-saturate-300 backdrop-brightness-110 rounded-4xl text-white/70 hover:text-white text-[28px] font-extrabold m-4 mx-20">
          <div className="drop-shadow-lg drop-shadow-black/40">張雅媗</div>
        </Link>
        <div className="text-center font-light text-mauve-700 text-[16px] drop-shadow-lg drop-shadow-fuchsia-950 bg-white/10 backdrop-saturate-200 backdrop-brightness-100 rounded-2xl p-2">
          跨領域的設計者，結合行銷策略規劃、數位/互動設計與展覽策劃。
        </div>

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
          <div className="bg-white/20 backdrop-saturate-300 backdrop-blur-sm transition delay-120 duration-500 ease-in-out hover:bg-[url(/softGreen.png)] hover:bg-cover hover:bg-center hover:scale-107 hover:text-lime-800 border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 flex justify-center items-center">
            關於我
          </div>
        </Link>

        <Link href="/hobby">
          <div className="bg-white/20 backdrop-saturate-300 backdrop-blur-sm transition delay-120 duration-500 ease-in-out hover:bg-[url(/blue.png)] hover:bg-cover hover:bg-center hover:scale-107 hover:text-white border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 flex justify-center items-center">
            我的興趣
          </div>
        </Link>

        <Link href="/ProgrammingProject">
          <div className="bg-white/20 backdrop-saturate-300 backdrop-blur-sm transition delay-120 duration-500 ease-in-out hover:bg-[url(/blueDark.png)] hover:bg-cover hover:bg-center hover:scale-107 hover:text-white border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 flex justify-center items-center">
            程式設計
          </div>
        </Link>

        <Link href="/Modeling">
          <div className="bg-white/20 backdrop-saturate-300 backdrop-blur-sm transition delay-120 duration-500 ease-in-out hover:bg-[url(/blue.png)] hover:bg-cover hover:bg-center hover:scale-107 hover:text-white border-2 border-white text-mauve-700 p-[16px] rounded-4xl mt-2 flex justify-center items-center">
            建模作品
          </div>
        </Link>


      </div>
      {/* </div> */}
    </>
  );
}
