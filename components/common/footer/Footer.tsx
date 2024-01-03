import { Typography } from '@material-tailwind/react'
import React from 'react'

const Footer = () => {
    return (
        <footer className="relative bottom-0 z-9 flex h-full  max-w-full rounded-none px-5 w-full py-6 bg-[#37474f] md:bg-[#F1F5F9] justify-center items-end">
            <Typography color="white" className="text-sm font-normal text-center md:text-black ">
                Copyright &copy; 2023 <strong> NT Corp Analytics </strong>by JKO IT Development Team.
            </Typography>
        </footer>
    )
}

export default Footer