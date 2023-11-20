import React from 'react'
import { TopbarProp } from "@/interface/typings";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { GetLiveTime } from "../../common/timeAndDate/TimeAndDate";
import DropdownUser from './DropdownUser';

const Topbar = ({ sidebarOpen, setSidebarOpen }: TopbarProp) => {
    return (
        <header className='sticky top-0 z-999 flex bg-[#37474f] w-full drop-shadow-none'>
            <div className='flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11'>
                <div className='flex items-center gap-2 text-white sm:gap-4 lg:hidden'>
                    <Button
                        aria-controls="sidebar"
                        onClick={(event) => {
                            event.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm border-stroke bg-yellow-900 p-1.5 shadow-sm lg:hidden"
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <MenuIcon />
                        </svg>
                        <span
                            className="relative block 
              cursor-pointer"
                        ></span>
                    </Button>
                    <Link className="block flex-shrink-0 lg-hidden" href="views/dashboard/home">
                        <AccountCircleIcon />
                    </Link>
                    Topbar
                </div>
                <div className="hidden text-white lg:block">
                    <h2 className="whitespace-pre-line text-center">
                        {`PT. Bangkitgiat Usaha Mandiri \n Palm Oil Plantation and Mill`}
                    </h2>
                </div>
            </div>
            <div className="flex items-center gap-3 2xsm:gap-7">
                <GetLiveTime />
                <DropdownUser />
            </div>
        </header>

    )
}

export default Topbar;