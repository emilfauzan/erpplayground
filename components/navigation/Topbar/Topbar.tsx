import React from 'react'
import { TopbarProp } from "@/interface/typings";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { GetLiveTime } from "../../common/timeAndDate/TimeAndDate";
import DropdownUser from './DropdownUser';
import Image from "next/image";
import CompanyLogo from "@/public/images/companyLogo/companyLogo.png";

const Topbar = ({ sidebarOpen, setSidebarOpen }: TopbarProp) => {
    return (
        <header className='sticky top-0 z-99 flex bg-[#37474f] w-full drop-shadow-none'>
            <div className='flex flex-grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11'>
                <div className='flex items-center gap-2 text-white sm:gap-4 2xl:hidden'>
                    <Button
                        aria-controls="sidebar"
                        onClick={(event) => {
                            event.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99 block rounded-sm border-stroke hover:bg-white hover:text-black p-1.5 shadow-sm 2xl:hidden duration-300 ease-in-out"
                        variant='text'
                    >
                        <MenuIcon />
                        <span
                            className="relative block 
              cursor-pointer"
                        ></span>
                    </Button>
                    <Link className="block flex-shrink-0 2xl-hidden" href="home">
                        <Image
                            src={CompanyLogo}
                            width={32}
                            height={32}
                            alt="Company Logo"
                        />
                    </Link>
                    <h2 className='hidden sm:block'>

                    PT. Bangkitgiat Usaha Mandiri
                    </h2>
                </div>
                <div className="hidden text-white 2xl:block">
                    <h2 className="whitespace-pre-line text-center">
                        {`PT. Bangkitgiat Usaha Mandiri \n Palm Oil Plantation and Mill`}
                    </h2>
                </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
                <GetLiveTime />
                <DropdownUser />
            </div>
        </header>

    )
}

export default Topbar;