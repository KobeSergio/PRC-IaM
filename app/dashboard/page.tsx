"use client";

import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const clients: any[] = [
    {
      client_name: "Mapua University",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "Scheduling",
      date_issued: "5/20/23",
      route: "/dashboard/applicant",
    },
    {
      client_name: "Mapua Malayan Colleges Laguna",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "To inspect",
      date_issued: "5/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "Scheduling",
      date_issued: "5/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "Scheduling",
      date_issued: "5/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "Scheduling",
      date_issued: "5/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "Scheduling",
      date_issued: "5/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "Scheduling",
      date_issued: "5/20/23",
      route: "",
    },
    {
      client_name: "Mapua Malayan Colleges Mindanao",
      address: "1191 Pablo Ocampo Sr. Ext, Makati, Metro Manila",
      status: "Scheduling",
      date_issued: "5/20/23",
      route: "",
    },
  ];
  return (
    <>
      <div className="min-h-[75vh] flex flex-col lg:flex-row gap-5">
        <aside className="w-full lg:w-1/4">
          <Sidebar />
        </aside>
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          <div className="bg-white border border-[#D5D7D8] flex flex-col lg:flex-row justify-between rounded-[10px] p-6 max-lg:gap-4">
            <div className="flex flex-col">
              <h1 className="font-monts font-bold text-2xl text-darkerGray">
                RO Tasks
              </h1>
              <h3 className="font-monts font-semibold text-base text-darkerGray">
                24 totals,{" "}
                <span className="font-medium">proceed to resolve them</span>
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
              <div className="flex flex-col items-center">
                <h2 className="font-monts font-semibold text-2xl text-darkerGray">
                  12
                </h2>
                <p className="font-monts font-medium text-base text-darkerGray">
                  Done
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-monts font-semibold text-2xl text-darkerGray">
                  2
                </h2>
                <p className="font-monts font-medium text-base text-darkerGray">
                  Inspect
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-monts font-semibold text-2xl text-darkerGray">
                  4
                </h2>
                <p className="font-monts font-medium text-base text-darkerGray">
                  Pending Schedule
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto h-full bg-white border border-[#D5D7D8] rounded-[10px]">
            <div className="w-[1000px] grid grid-cols-12 border-b border-[#BDBDBD] p-6">
              <h3 className="col-span-3 font-monts font-semibold text-base text-start text-[#5C5C5C] px-4 pl-0">
                Client
              </h3>
              <h3 className="col-span-4  font-monts font-semibold text-base text-start text-[#5C5C5C] px-4">
                Address
              </h3>
              <h3 className="col-span-2 font-monts font-semibold text-base text-center text-[#5C5C5C] px-4">
                Status
              </h3>
              <h3 className="col-span-2 font-monts font-semibold text-base text-center text-[#5C5C5C] px-4">
                Date Issued
              </h3>
              <h3 className="col-span-1 font-monts font-semibold text-base text-center text-[#5C5C5C] px-4 pr-0">
                {""}
              </h3>
            </div>

            <div className="lg:overflow-y-auto max-h-[25rem]">
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
                      className={`w-[1000px] grid grid-cols-12 p-6 ${
                        index < clients.length - 1
                          ? "border-b border-[#BDBDBD] "
                          : "border-none"
                      }  `}
                    >
                      <h3 className=" col-span-3 font-monts font-semibold text-base text-darkerGra px-4 pl-0">
                        {row.client_name}
                      </h3>
                      <h3 className=" col-span-4 font-monts font-semibold text-base text-darkerGray px-4">
                        {row.address}
                      </h3>
                      <h3 className=" col-span-2 font-monts font-semibold text-base text-center text-darkerGray px-4">
                        {row.status}
                      </h3>
                      <h3 className=" col-span-2 font-monts font-semibold text-base text-center text-darkerGray px-4">
                        {row.date_issued}
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
