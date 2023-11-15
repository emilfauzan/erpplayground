"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();


    return (
        <div className='pt-2 px-4'>
            <h2 className='pb-2 text-center'>ERP Playground</h2>
            <ul>
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