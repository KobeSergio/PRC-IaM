"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Profile() {
  const [sideTab, setSideTab] = useState(0);
  const [accountTab, setAccountTab] = useState(0);
  return (
    <>
      <Breadcrumbs />
      <div className="bg-white h-[500px] flex flex-row rounded-2xl p-6">
        <div className="w-1/4">
          <div className="flex flex-col">
            <h2 className="font-monts font-bold text-darkerGray text-base">
              My Profile
            </h2>
            <div className="flex flex-col gap-0.5 mt-2">
              <div
                onClick={() => setSideTab(0)}
                className={` w-fit px-4 py-2 font-monts text-[14px] rounded-[8px] cursor-pointer ${
                  sideTab === 0
                    ? " text-primaryBlue font-semibold"
                    : "text-darkeGray "
                }`}
              >
                My Account Info
              </div>
              <div
                onClick={() => setSideTab(1)}
                className={`w-fit px-4 py-2 font-monts text-[14px] rounded-[8px] cursor-pointer ${
                  sideTab === 1
                    ? " text-primaryBlue font-semibold"
                    : "text-darkeGray "
                }`}
              >
                Application Events
              </div>
              <div
                onClick={() => setSideTab(2)}
                className={`w-fit px-4 py-2 font-monts text-[14px] rounded-[8px] cursor-pointer ${
                  sideTab === 2
                    ? " text-primaryBlue font-semibold"
                    : "text-darkeGray "
                }`}
              >
                Certificates
              </div>
              <div
                onClick={() => setSideTab(3)}
                className={`w-fit px-4 py-2 font-monts text-[14px] rounded-[8px] cursor-pointer ${
                  sideTab === 3
                    ? " text-primaryBlue font-semibold"
                    : "text-darkeGray "
                }`}
              >
                Change Credentials/Transfer Account Representative
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          {sideTab === 0 && (
            <div className="border-2 border-[#D5D7D8] rounded-lg h-[455px]">
              <div className="flex flex-row justify-between items-center px-8 pt-6">
                <div className="flex flex-row">
                  <Image
                    src={"/assets/icons/avatar_big.svg"}
                    width={100}
                    height={100}
                    alt={"avatar and institution icon combined"}
                  />
                  <div className="flex flex-col justify-center">
                    <h1 className="font-monts font-semibold text-xl text-darkerGray uppercase">
                      CHRISTIAN KOBE A. SERGIO
                    </h1>
                    <h3 className="font-monts font-semibold text-sm text-darkerGray uppercase">
                      MAPUA UNIVERISTY
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Image
                    src={"/assets/icons/check_small.svg"}
                    width={31}
                    height={31}
                    alt={"accreditation check icon"}
                  />
                  <h3 className="font-monts font-semibold text-xs text-darkerGray">
                    Accreditated until 5/20/26
                  </h3>
                </div>
              </div>
              <div className="border-b-2">
                <div className="flex flex-row gap-4 mt-4 px-8 ">
                  <div
                    onClick={() => setAccountTab(0)}
                    className={`w-fit font-monts text-[14px] rounded-[8px] cursor-pointer ${
                      accountTab === 0
                        ? " text-primaryBlue font-semibold underline underline-offset-[6.5px]"
                        : "text-darkeGray "
                    }`}
                  >
                    Representative
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
                    Account
                  </div>
                </div>
              </div>
              {accountTab === 0 && (
                <div className="px-8 py-6">insert content here 1</div>
              )}
              {accountTab === 1 && (
                <div className="px-8 py-6">insert content here 2</div>
              )}
              {accountTab === 2 && (
                <div className="px-8 py-6">insert content here 3</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
