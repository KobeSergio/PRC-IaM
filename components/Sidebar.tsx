"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    const items = [
        { title: 'My Account Info', route: '/profile/account-info' },
        { title: 'Application Events', route: '/application-events' },
        { title: 'Certificates', route: '/certificates' },
        { title: 'Change Credentials/Transfer Account Representative', route: '/change' },
        
      ];
    return (
        <aside className="flex flex-col ">
            <h2>My Profile</h2>
            <ul>
            {items.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.route}
                    className={`flex items-center pl-4 pr-2 py-2 font-monts text-[14px] rounded-[8px] cursor-pointer ${pathname === item.route
                        ? " text-primaryBlue font-semibold"
                        : "text-darkeGray "
                    }`}
                  >
                    <span className="ml-3">{item.title}</span>
                  </Link>
                );
              })}
            </ul>

        </aside>
    )
}