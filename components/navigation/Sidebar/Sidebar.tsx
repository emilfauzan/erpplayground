"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/mt_export_file/ExportComponent";
import { SidebarProp } from "@/interface/typings";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProp) => {
    const pathname = usePathname();

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
    );

    // close when click outside the side navigation
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document.querySelector("body")?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    return (
        <aside ref={sidebar} className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-[#37474f] duration-300 ease-in-out dark:bg-boxdark lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
            {/* Title start */}
            <div
                className="flex items-center justify-between gap-2 px-6 
        py-5.5 lg:block lg:py-6.5"
            >
                <Link href={"home"}>
                    <div
                        className="content flex w-full place-items-center 
              justify-center py-2 align-middle"
                    >
                        <h2 className="flex place-items-center justify-center mx-2 my-4"
                        >ERP Playground</h2>
                    </div>
                </Link>
                <Button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="ml-0 block border border-whiten bg-none lg:hidden"
                    variant="outlined"
                >
                    <svg
                        className="fill-current"
                        width="30"
                        height="auto"
                        viewBox="0 0 10 5"
                        fill="none"
                        color="white"
                    >
                        <ArrowBackIosIcon />
                    </svg>
                </Button>
            </div>
            {/* Title end */}

            <ul className='mt-6'>
                <li>
                    <Link
                        href={"home"}
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
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
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
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
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
                   ${pathname === "/dashboard/home" &&
                            "bg-yellow-900 dark:bg-black"
                            }`}
                    >
                        Production
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar