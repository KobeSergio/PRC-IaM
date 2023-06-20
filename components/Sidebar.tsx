"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const pathname = usePathname();
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  } as const;
  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  } as const;

  const content = [
    {
      title: "Home",
      icon: (
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 10L3.5 8M3.5 8L10.5 1L17.5 8M3.5 8V18C3.5 18.5523 3.94772 19 4.5 19H7.5M17.5 8L19.5 10M17.5 8V18C17.5 18.5523 17.0523 19 16.5 19H13.5M7.5 19C8.05228 19 8.5 18.5523 8.5 18V14C8.5 13.4477 8.94772 13 9.5 13H11.5C12.0523 13 12.5 13.4477 12.5 14V18C12.5 18.5523 12.9477 19 13.5 19M7.5 19H13.5"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      route: "/dashboard",
    },
    {
      title: "Task History",
      icon: (
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 10H11.5M5.5 14H11.5M13.5 19H3.5C2.39543 19 1.5 18.1046 1.5 17V3C1.5 1.89543 2.39543 1 3.5 1H9.08579C9.351 1 9.60536 1.10536 9.79289 1.29289L15.2071 6.70711C15.3946 6.89464 15.5 7.149 15.5 7.41421V17C15.5 18.1046 14.6046 19 13.5 19Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      route: "/task-history",
    },
    {
      title: "My Profile",
      icon: (
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 12C4.63401 12 1.5 15.134 1.5 19H15.5C15.5 15.134 12.366 12 8.5 12Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      route: "/profile",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-full px-6 py-10 flex flex-col justify-center items-center bg-white border border-[#D5D7D8] rounded-[10px]">
      <h3 className="font-monts font-medium text-base text-darkerGray">
        Welcome back, <span className="text-primaryBlue">Surveyor</span>
      </h3>
      <div className="flex flex-col items-center mt-4">
        <h1 className="font-monts font-medium text-[32px] text-darkerGray">
          {currentDate.toLocaleTimeString(undefined, timeOptions)}
        </h1>
        <h2 className="font-monts font-medium text-base text-darkerGray">
          {currentDate.toLocaleDateString(undefined, dateOptions)}
        </h2>
      </div>
      <hr className="bg-[#BDBDBD] w-full h-px my-4"></hr>
      <div className="w-full space-y-2">
        {content.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.route}
              className={`flex items-center pl-4 pr-2 py-3 font-monts font-semibold text-[14px] rounded-[10px] cursor-pointer ${
                pathname === item.route
                  ? "bg-primaryBlue text-white fill-white"
                  : "text-darkGray hover:bg-lightestGray "
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
