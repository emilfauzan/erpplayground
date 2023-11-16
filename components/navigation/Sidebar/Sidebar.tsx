"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();


    return (
        <div className='p-4 bg-blue-900'>
            {/* Title start */}
            <h1 className='pb-2 text-center font-bold'>
                <Link
                    href={"home"}
                    className={` 
                   ${pathname === "/dashboard/home" &&
                        "bg-yellow-900 dark:bg-black"
                        }`}
                >
                    ERP Playground
                </Link>
            </h1>
            {/* Title end */}
            <ul className='mt-'>
                <li>
                    <Link
                        href={"home"}
                        className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
                   ${pathname === "/dashboard/home" &&
                            "bg-yellow-900 dark:bg-black"
                            }`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href={"human_resources"}
                        className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
                   ${pathname === "/dashboard/home" &&
                            "bg-yellow-900 dark:bg-black"
                            }`}
                    >
                        Human Resources
                    </Link>
                </li>
                <li>
                    <Link
                        href={"production"}
                        className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
                   ${pathname === "/dashboard/home" &&
                            "bg-yellow-900 dark:bg-black"
                            }`}
                    >
                        Production
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar