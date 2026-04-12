"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {

  return (
    <>
      <div className="flex h-full justify-center">
        <div className="sm:block hidden w-full">
          {/* 電腦版 */}
          <div className="flex h-full">
            <>
              <div className="justify-start">
                <Menu />
              </div>
              <div className="bg-red-100 w-full h-full">
                首頁
              </div>
            </>

          </div>
        </div>
        <div className="sm:hidden">
          {/* 手機版 */}
          <Menu />
        </div>
      </div>
    </>
  );
}
