"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TaskHistory() {
  const clients: any[] = [
    {
      client_name: "Mapua University",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "/dashboard/applicant",
    },
    {
      client_name: "Mapua Malayan Colleges Laguna",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      date_issued: "5/20/23",
      inspection_date: "6/20/23",
      route: "",
    },
  ];

  return (
    <>
      <div className="min-h-[75vh] flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:w-1/4">
          <Sidebar />
        </aside>
        <div className="w-full lg:w-3/4 ">
          <div className="min-h-full bg-white border border-[#D5D7D8] flex flex-col rounded-[10px] overflow-auto">
            <div className="w-[1000px] grid grid-cols-10 border-b border-[#BDBDBD] p-6 ">
              <h3 className="col-span-5 font-monts font-semibold text-base text-start text-[#5C5C5C] px-4 pl-0">
                Client
              </h3>
              <h3 className="col-span-2 font-monts font-semibold text-base text-center text-[#5C5C5C] px-4">
                Date Issued
              </h3>
              <h3 className="col-span-2 font-monts font-semibold text-base text-center text-[#5C5C5C] px-4 ">
                Inspection Date
              </h3>
              <h3 className="col-span-1 font-monts font-semibold text-base text-center text-[#5C5C5C] px-4 pr-0"></h3>
            </div>
            <div className="lg:overflow-y-auto max-h-[32rem]">
              {clients.length == 0 ? (
                <div>
                  <h3 className="font-monts font-medium text-base text-center text-darkerGray">
                    There are no items to display.
                  </h3>
                </div>
              ) : (
                <>
                  {clients.map((row, index) => (
                    <div
                      key={index}
                      className={`w-[1000px] grid grid-cols-10 p-6 ${
                        index < clients.length - 1
                          ? "border-b border-[#BDBDBD] "
                          : "border-none"
                      }  `}
                    >
                      <h3 className=" col-span-5 font-monts font-semibold text-base text-darkerGra px-4 pl-0">
                        {row.client_name}
                      </h3>

                      <h3 className=" col-span-2 font-monts font-semibold text-base text-center text-darkerGray px-4">
                        {row.date_issued}
                      </h3>
                      <h3 className=" col-span-2 font-monts font-semibold text-base text-center text-darkerGray px-4">
                        {row.inspection_date}
                      </h3>
                      <h3 className=" col-span-1 font-monts font-semibold text-base text-center text-darkerGray px-4 pr-0">
                        <Link
                          href={row.route}
                          className="font-monts font-semibold text-base text-primaryBlue p-3 pl-0 hover:underline"
                        >
                          View
                        </Link>
                      </h3>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
