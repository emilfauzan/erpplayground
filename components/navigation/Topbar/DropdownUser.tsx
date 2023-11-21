import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@material-tailwind/react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
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
                className={`absolute right-2 mt-4 w-62.5 flex-col rounded-md border border-stroke bg-blue-gray-800 text-white shadow-default dark:border-strokedark ${dropdownOpen === true ? "block" : "hidden"
                    }`}
            >
                <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-5 dark:border-stroke">
                    <h1 className="text-sm italic">
                        Staff&apos;s Name <br /> Staff&apos;s ID <br /> Staff&apos;s
                        Position
                    </h1>
                </ul>
                <div className="text-center py-2">
                    <Button className="gap-3.5 px-6 py-1.5 text-sm font-bolder duration-300 ease-in-out hover:bg-red-500 hover:border-red-500 lg:text-base border border-stroke">
                        <Link
                            href={"/"}
                            className="flex items-center gap-3.5 text-sm font-bolder duration-300 ease-in-out "
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
    );
};

export default DropdownUser;
