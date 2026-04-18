"use client"

import Image from "next/image"
import Link from "next/link";
import Menu from "../component/Menu"

export default function Home() {

  return (
    <>
      <div className="flex h-full justify-center bg-pink-100">

        <div className="sm:block hidden w-full">
          {/* 電腦版 */}
          <div className="flex h-full w-full">
            <>
              <div className="justify-start w-[320px]">
                <Menu />
              </div>
              <div className="bg-[url(/black.png)] bg-center bg-cover flex h-full w-full justify-center items-center px-8 md:px-40 relative">
                <div className="bg-blue-950/30 font-['Noto_Serif_TC'] font-bold overflow-hidden rounded-2xl backdrop-brightness-50 backdrop-saturate-150 inset-shadow-lg inset-shadow-black inset-shadow-sm text-orange-200 text-[18px] flex flex-col justify-center items-center h-[320px] w-full content-start p-8 pb-12">
                  <div className="overflow-y-auto p-4">
                    <div>
                      我的名字叫張雅媗，23歲。
                      住在木柵動物園西南部的大學宿舍區一帶，未婚。
                      我在政大上學。常常都要上課到晚上九點才能回家。
                      我不抽煙，酒幾乎不沾。
                      晚上12點後睡，每天都睡不足八個小時。
                      睡前我一定會喝一杯水，然後滑一小時的手機。
                      上了床還在滑手機，並在某刻眼睛閉起來自動斷線到天亮，把疲勞和壓力留到第二天。
                      沒聽過醫生說我很正常。
                    </div>
                    <div className="flex w-full mt-4">
                      夢想是擁有良好的生活作息，跟荒木老師看齊。
                    </div>
                    <div className="grid md:grid-cols-4 grid-cols-1 w-full mt-4">

                      <label>
                        <input className="accent-violet-400 m-2" type="checkbox" defaultChecked/>
                        不抽菸
                      </label>
                      <label>
                        <input className="accent-lime-400 m-2" type="checkbox" defaultChecked/>
                        不喝酒
                      </label>
                      <label>
                        <input className="accent-violet-400 m-2" type="checkbox" />
                        每天 10 點前睡
                      </label>
                      <label>
                        <input className="accent-lime-400 m-2" type="checkbox" />
                        每天睡滿 8 小時
                      </label>

                      <label>
                        <input className="accent-violet-400 m-2" type="checkbox" />
                        睡前做柔軟操
                      </label>
                      <div className="col-span-2">
                        <label>
                          <input className="accent-lime-400 m-2" type="checkbox" />
                          不把疲勞和壓力留到第二天
                        </label>
                      </div>

                      <label>
                        <input className="accent-violet-400 m-2" type="checkbox" />
                        好好愛護手手
                      </label>


                    </div>
                    <div className="bg-black/10 opacity-20 absolute right-4 bottom-4">
                      道阻且長啊......
                    </div>
                  </div>


                </div>
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
