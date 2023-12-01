"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/mt_export_file/ExportComponent";
import { SidebarProp } from "@/interface/typings";
import SidebarLinkGroup from "./SidebarLinkGroup";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CompanyLogo from "@/public/images/companyLogo/companyLogo.png";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProp) => {
    const pathname = usePathname();

    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);

    const storedSidebarExpanded = "true";
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
        <aside ref={sidebar} className={`absolute left-0 top-0 z-9999 flex h-screen w-58 flex-col overflow-y-hidden bg-[#37474f] duration-300 ease-in-out dark:bg-boxdark 2xl:static 2xl:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}>

            {/* Title start */}
            <div
                className="flex items-center justify-between gap-2 px-6 
        py-1 2xl:block 2xl:py-1"
            >
                
                <Button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="pl-3 pr-2 py-2 block flex-shrink-0 rounded-md hover:bg-white text-center text-white hover:text-black p-1.5 shadow-sm 2xl:hidden duration-300 ease-in-out"
                    variant="text"
                >
                        <MenuIcon />
                </Button>
                <Link href={"/dashboard/home"}
                    className={`group relative flex items-center gap-2.5 rounded-lg px-4 py-2 font-medium text-white duration-300 ease-in-out
                ${pathname === "/dashboard/home"
                        }`}
                >
                    <div
                        className="content flex place-items-center 
              justify-center py-2 align-middle"
                    >
                        <Image
                            width={50}
                            height={50}
                            src={CompanyLogo}
                            alt="Company Logo"
                            className="flex place-items-center justify-center"
                        />
                        <div className="ml-4">
                            <Typography className="tracking-wider text-left text-white font-extrabold" variant="h6">
                                NT CORP ANALYTICS
                            </Typography>
                            {/* White divider */}
                            <hr className="block sm:hidden text-inherit" />
                            <Typography className="tracking-wider text-left text-white font-bolder block sm:hidden" variant="h6">
                                PT. BANGKITGIAT USAHA MANDIRI
                            </Typography>
                        </div>
                    </div>
                </Link>
            </div>
            {/* Title end */}

            {/* Sidebar Content - Start */}

            <div className="no-scrollbar flex flex-col overflow-y-auto  duration-300 ease-linear">
                <nav className="mt-5 px-4 py-4 2xl:mt-0 2xl:px-6">

                    {/* Main Navigations - Start */}
                    <div>
                        <ul className="flex flex-col gap-1">
                            <li>
                                <Link href={"/dashboard/home"}
                                    className={`group relative flex items-center gap-2.5 rounded-lg px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
${pathname === "/dashboard/home" &&
                                        "bg-orange-500 dark:bg-black"
                                        }`}
                                >
                                    <svg
                                        className="fill-current mr-3"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <HomeOutlinedIcon />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            {/*Human Resources Link*/}
                            <SidebarLinkGroup
                                activeCondition={
                                    pathname === "/dashboard" ||
                                    pathname === "/dashboard/human_resources"
                                }
                            >
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <Link
                                                href="#"
                                                className={`group relative flex items-center gap-2.5 rounded-lg px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black
                        ${(pathname === "/dashboard" ||
                                                        pathname === "/dashboard/human_resources") &&
                                                    "bg-orange-500 dark:bg-black"
                                                    }`}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    sidebarExpanded
                                                        ? handleClick()
                                                        : setSidebarExpanded(true);
                                                }}
                                            >
                                                <svg
                                                    className="fill-current mr-3"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                >
                                                    <PeopleOutlineOutlinedIcon />
                                                </svg>
                                                Human Resources
                                                <svg
                                                    className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180 ease-in-out duration-300"
                                                        }`}
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 20 20"
                                                    fill="none"
                                                >
                                                    <KeyboardArrowUpIcon />
                                                </svg>
                                            </Link>
                                            <div
                                                className={`translate transform overflow-hidden ${!open && "hidden"
                                                    }`}
                                            >
                                                <ul className="mb-4 mt-1 flex flex-col gap-2 pl-6">
                                                    <li>
                                                        <Link
                                                            href="/dashboard/human_resources"
                                                            className={`group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium text-white duration-300 
                                ease-in-out hover:bg-white hover:text-black ${pathname === "/dashboard/human_resources" &&
                                                                "bg-orange-500 dark:bg-black"
                                                                } `}
                                                        >
                                                            <svg
                                                                className="fill-current mr-3"
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 18 18"
                                                                fill="none"
                                                            >
                                                                <PeopleOutlineOutlinedIcon />
                                                            </svg>
                                                            HR Dashboard
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </React.Fragment>
                                    );
                                }}
                            </SidebarLinkGroup>
                            <li>
                                <Link href={"/dashboard/production"}
                                    className={`group relative flex items-center gap-2.5 rounded-lg px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
${pathname === "/dashboard/production" &&
                                        "bg-orange-500 dark:bg-black"
                                        }`}
                                >
                                    <svg
                                        className="fill-current mr-3"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <InsertChartOutlinedRoundedIcon />
                                    </svg>
                                    Production
                                </Link>
                            </li>

                        </ul>

                    </div>
                    {/* Main Navigations - End */}

                    {/* White divider */}
                    <hr className="my-3 mx-1 text-stroke" />

                    {/* App Navigations - Start */}
                    <div>
                        <ul className="mb-6 flex flex-col gap-1.5">
                            <h3 className="ml-4 text-sm font-semibold text-white">Applications</h3>


                            <li>
                                <Link href={"/apps/calendar"}
                                    className={`group relative flex items-center gap-2.5 rounded-lg px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black
                                    ${pathname === "/apps/calendar" &&
                                        "bg-orange-500 dark:bg-black"
                                        }`}
                                >
                                    <svg
                                        className="fill-current mr-3"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <CalendarMonthOutlinedIcon />
                                    </svg>
                                    Calendar
                                </Link>
                            </li>

                        </ul>

                    </div>
                    {/* App Navigations - End */}

                </nav>
            </div>

            {/* Sidebar Content - End */}

        </aside>
    )
}

export default Sidebar