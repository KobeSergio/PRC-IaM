"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Applicant() {
 
  return (
    <>
      <div className="min-h-[75vh] flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:w-1/4">
          <Sidebar />
        </aside>
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          <div className="bg-white border border-[#D5D7D8] flex flex-col lg:flex-row justify-between rounded-[10px] p-6 max-lg:gap-4">
            
          </div>
          
        </div>
      </div>
    </>
  );
}
