"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { BsPlusLg } from "react-icons/bs";
import AddNewInspection from "./Modals/AddNewInspection";
import { useInspections } from "@/contexts/InspectionContext";

export default function Nav() {
  const [toggle, setToggle] = useState(false);
  const [showAddInspectionModal, setShowAddInspectionModal] = useState(false);
  const { setInspections } = useInspections();

  return (
    <>
      <AddNewInspection
        isOpen={showAddInspectionModal}
        setter={setShowAddInspectionModal}
        updateInspections={setInspections}
      />
      <nav className="w-full relative z-30 bg-white-800 shadow ">
        <div className="justify-between px-6 lg:px-12 mx-auto lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between py-3 lg:block">
              <div className="flex flex-row gap-3 items-center">
                <Link href="/">
                  <Image
                    src={"/assets/images/prc_logo.svg"}
                    width={58}
                    height={58}
                    alt={"PRC Logo"}
                    className="max-md:w-[50px] max-md:h-[50px]"
                  />
                </Link>
                <h1 className="font-monts font-semibold text-base lg:text-xl text-primaryBlue">
                  PRC Inspection and Monitoring System
                </h1>
              </div>
              <div className="lg:hidden">
                <Image
                  src={
                    toggle ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"
                  }
                  width={20}
                  height={20}
                  alt="menu"
                  className="object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-2 lg:block lg:pb-0 lg:mt-0 ${
                toggle ? "block" : "hidden"
              }`}
            >
              <div>
                {/* <button
                  type="button"
                  onClick={() => signOut()}
                  className="border-2 border-darkGray rounded-lg px-3 py-2 "
                >
                  Sign out
                </button> */}
                <button
                  type="button"
                  className="w-full lg:w-fit flex items-center justify-center gap-2 cursor-pointer text-gray border bg-primaryBlue border-primaryBlue rounded-lg font-monts font-semibold text-sm text-white h-fit p-2.5"
                  onClick={() => setShowAddInspectionModal(true)}
                >
                  <BsPlusLg className="flex w-4 h-4 object-contain" />
                  Add new inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
