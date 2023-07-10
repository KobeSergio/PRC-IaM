"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [sideTab, setSideTab] = useState(0);
  const [accountTab, setAccountTab] = useState(0);

  return (
    <>
      <div className="min-h-[75vh] flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:w-1/4">
          <Sidebar />
        </aside>
        <div className="w-full lg:w-3/4">
          <div className="min-h-full bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] p-6 ">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-wrap flex-row gap-2">
                <Image
                  src={"/assets/icons/avatar_big.svg"}
                  width={100}
                  height={100}
                  className="w-[48px] md:w-[100px] h-[48px] md:h-[100px]"
                  alt={"avatar and institution icon combined"}
                />
                <div className="flex flex-col justify-center">
                  <h1 className="font-monts font-semibold text-base lg:text-xl text-darkerGray uppercase">
                    Laguna Regional Office
                  </h1>
                  <h3 className="font-monts font-semibold text-sm text-darkerGray uppercase">
                    RO #2019161173
                  </h3>
                </div>
              </div>
              {/* <div className="flex flex-col items-center gap-2">
                <Image
                  src={"/assets/icons/check_small.svg"}
                  width={31}
                  height={31}
                  alt={"accreditation check icon"}
                />
                <h3 className="font-monts font-semibold text-xs text-darkerGray">
                  Accreditated until 5/20/26
                </h3>
              </div> */}
            </div>
            <div className="">
              <div className="border-b-2 flex flex-row gap-4 mt-4  overflow-x-auto">
                <div
                  onClick={() => setAccountTab(0)}
                  className={`w-fit font-monts text-[14px] rounded-[8px] cursor-pointer ${
                    accountTab === 0
                      ? " text-primaryBlue font-semibold underline underline-offset-[6.5px]"
                      : "text-darkeGray "
                  }`}
                >
                  Account
                </div>
                <div
                  onClick={() => setAccountTab(1)}
                  className={`w-fit font-monts text-[14px] rounded-[8px] cursor-pointer ${
                    accountTab === 1
                      ? " text-primaryBlue font-semibold underline underline-offset-[6.5px]"
                      : "text-darkeGray "
                  }`}
                >
                  Institution
                </div>
                <div
                  onClick={() => setAccountTab(2)}
                  className={`w-fit font-monts text-[14px] rounded-[8px] cursor-pointer ${
                    accountTab === 2
                      ? " text-primaryBlue font-semibold underline underline-offset-[6.5px]"
                      : "text-darkeGray "
                  }`}
                >
                  Representative
                </div>
            </div>
            <div className="h-[250px] mt-4">
              {accountTab === 0 && (
                <div className=" ">insert content here 1</div>
              )}
              {accountTab === 1 && (
                <div className="">insert content here 2</div>
              )}
              {accountTab === 2 && (
                <div className="">insert content here 3</div>
              )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
