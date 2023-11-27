"use client"

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/mt_export_file/ExportComponent";
import { SidebarProp } from "@/interface/typings";
import SidebarLinkGroup from "./SidebarLinkGroup";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CompanyLogo from "@/public/images/companyLogo/companyLogo.png";
import Image from "next/image";

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
        <aside ref={sidebar} className={`absolute left-0 top-0 z-9999 flex h-screen w-72 flex-col overflow-y-hidden bg-[#37474f] duration-300 ease-in-out dark:bg-boxdark 2xl:static 2xl:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}>

            {/* Title start */}
            <div
                className="flex items-center justify-between gap-2 px-6 
        py-5.5 2xl:block 2xl:py-6.5"
            >
                <Link href={"/dashboard/home"}
                    className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out
                ${pathname === "/dashboard/home"
                        }`}
                >
                    <div
                        className="content flex w-full place-items-center 
              justify-center py-2 align-middle"
                    >
                        <Image
                            width={50}
                            height={50}
                            src={CompanyLogo}
                            alt="Company Logo"
                            className="flex place-items-center justify-center"
                        />
                        <div className="ml-2">
                            <h1 className="text-left text-white">NT Corp Analytics</h1>
                        </div>
                    </div>
                </Link>
                <Button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="ml-0 block border border-whiten 2xl:hidden hover:bg-black duration-300 ease-in-out"
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

            {/* Sidebar Content - Start */}

            <div className="no-scrollbar flex flex-col overflow-y-auto bg-blue-gray-800 duration-300 ease-linear">
                <nav className="mt-5 px-4 py-4 2xl:mt-0 2xl:px-6">

                    {/* Main Navigations - Start */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-white">MAIN NAVIGATION</h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link href={"/dashboard/home"}
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
${pathname === "/dashboard/home" &&
                                        "bg-orange-500 dark:bg-black"
                                        }`}
                                >
                                    <svg
                                        className="fill-current"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <HomeIcon />
                                    </svg>
                                    Home Dashboard
                                </Link>
                            </li>
                            {/*Human Resources Link*/}
                            <SidebarLinkGroup
                                activeCondition={
                                    pathname === "/dashboard/human_resources" ||
                                    pathname === "/dashboard/human_resources"
                                }
                            >
                                {(handleClick, open) => {
                                    return (
                                        <React.Fragment>
                                            <Link
                                                href="#"
                                                className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black
                        ${(pathname === "" ||
                                                        pathname === "") &&
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
                                                    className="fill-current"
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 18 18"
                                                    fill="none"
                                                >
                                                    <GroupRoundedIcon />
                                                </svg>
                                                Human Resources
                                                <svg
                                                    className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${open && "rotate-180"
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
                                                            className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 font-medium text-white duration-300 
                                ease-in-out hover:bg-white hover:text-black ${pathname === "/dashboard/human_resources" &&
                                                                "bg-orange-500 dark:bg-black"
                                                                } `}
                                                        >
                                                            <svg
                                                                className="fill-current"
                                                                width="18"
                                                                height="18"
                                                                viewBox="0 0 18 18"
                                                                fill="none"
                                                            >
                                                                <GroupRoundedIcon />
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
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black 
${pathname === "/dashboard/production" &&
                                        "bg-orange-500 dark:bg-black"
                                        }`}
                                >
                                    <svg
                                        className="fill-current"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <AssessmentRoundedIcon />
                                    </svg>
                                    Production
                                </Link>
                            </li>

                        </ul>

                    </div>
                    {/* Main Navigations - End */}

                    {/* App Navigations - Start */}
                    <div>
                        <h3 className="mb-4 ml-4 text-sm font-semibold text-white">APPS</h3>

                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li>
                                <Link href={"/apps/calendar"}
                                    className={`group relative flex items-center gap-2.5 rounded-md px-4 py-2 font-medium text-white duration-300 ease-in-out hover:bg-white hover:text-black
                                    ${pathname === "/apps/calendar" &&
                                        "bg-orange-500 dark:bg-black"
                                        }`}
                                >
                                    <svg
                                        className="fill-current"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <CalendarMonthRoundedIcon />
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