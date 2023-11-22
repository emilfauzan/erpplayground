import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@material-tailwind/react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import LogoutIcon from "@mui/icons-material/Logout";

const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const trigger = useRef<any>(null);
    const dropdown = useRef<any>(null);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!dropdown.current) return;
            if (
                !dropdownOpen ||
                dropdown.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setDropdownOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }: KeyboardEvent) => {
            if (!dropdownOpen || keyCode !== 27) return;
            setDropdownOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    return (
        <>
            <div className="relative">
                <Link
                    ref={trigger}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-4"
                    href={"#"}
                >
                    <svg
                        className="mr-5 hidden hover:text-orange-400 text-white sm:block duration-300 ease-in-out"
                        width={60}
                        height={45}
                        viewBox="0 0 12 8"
                        fill="none"
                    >
                        <AccountCircleRoundedIcon />
                    </svg>
                </Link>
                <div
                    ref={dropdown}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                    className={`absolute right-2 mt-5 w-62.5 flex-col rounded-md border border-stroke bg-blue-gray-800 text-white shadow-default dark:border-strokedark ${dropdownOpen === true ? "block" : "hidden"
                        }`}
                >
                    <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-5 dark:border-stroke">
                        <h1 className="text-sm italic">
                            <div className="border-b-2 pb-2"><PersonRoundedIcon className="mr-2" fontSize="small" /> Staff&apos;s Name </div><br />
                            <div className="border-b-2 pb-2"><BadgeRoundedIcon className="mr-2" fontSize="small" /> Staff&apos;s ID </div><br />
                            <div className="border-b-2 pb-2"><AssignmentIndRoundedIcon className="mr-2" fontSize="small" /> Staff&apos;s Position</div>
                        </h1>
                    </ul>
                    <div className="text-center">
                        <Button className="w-full gap-3.5 px-6 py-3 text-sm font-bolder duration-300 ease-in-out hover:bg-red-500 hover:border-red-500 lg:text-base rounded-sm">
                            <Link
                                href={"/"}
                                className="flex items-center justify-center gap-3.5 text-sm font-bolder duration-300 ease-in-out "
                            >
                                <svg
                                    className="fill-current"
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                >
                                    <LogoutIcon />
                                </svg>
                                Log Out
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>

    );
};

export default DropdownUser;
