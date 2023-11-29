import React from 'react'
import { TopbarProp } from "@/interface/typings";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Navbar, Typography } from "@material-tailwind/react";
import Link from "next/link";
import { GetLiveTime } from "../../common/timeAndDate/TimeAndDate";
import DropdownUser from './DropdownUser';
import Image from "next/image";
import CompanyLogo from "@/public/images/companyLogo/companyLogo.png";

const Topbar = ({ sidebarOpen, setSidebarOpen }: TopbarProp) => {
    return (
        <Navbar className='sticky top-0 z-99 flex h-max max-w-full rounded-none p-1 lg:px-8 lg:py-4'>
            <div className='flex flex-grow items-center justify-between p-2 md:px-6 2xl:px-11'>
                <div className='flex items-center gap-2 text-black sm:gap-4 2xl:hidden'>
                    <Button
                        aria-controls="sidebar"
                        onClick={(event) => {
                            event.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99 block rounded-md border-stroke hover:bg-black hover:text-white p-1.5 shadow-sm 2xl:hidden duration-300 ease-in-out"
                        variant='text'
                    >
                        <MenuIcon />
                        <span
                            className="relative block 
              cursor-pointer"
                        ></span>
                    </Button>
                    <Link className="block flex-shrink-0 2xl-hidden pl-3 sm:pl-0" href="home">
                        <Image
                            src={CompanyLogo}
                            width={32}
                            height={32}
                            alt="Company Logo"
                        />
                    </Link>
                    <div className='flex'>
                    <Typography className='font-cinzel font-bold hidden sm:block tracking-wide'>
                        PT. BANGKITGIAT USAHA MANDIRI
                    </Typography>

                    </div>
                </div>
                <div className='hidden 2xl:block'>
                    <Typography variant='h6' className='tracking-wider text-black text-center font-cinzel '>
                        PT. BANGKITGIAT USAHA MANDIRI <br />
                        PALM OIL PLANTATION & MILL
                    </Typography>
                </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
                <GetLiveTime />
                <DropdownUser />
            </div>
        </Navbar>

    )
}

export default Topbar;