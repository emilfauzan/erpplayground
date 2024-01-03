import { useEffect, useRef, useState } from "react";
import {
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Typography,
} from "@material-tailwind/react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BadgeRoundedIcon from '@mui/icons-material/BadgeRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import LogoutIcon from "@mui/icons-material/Logout";
import { GetDayAndDate } from "@/components/common/timeAndDate/TimeAndDate";

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

    const handleLogout = () => {
        // Perform any additional logout logic if needed

        // Redirect to the login page
        window.location.href = '/'; // Replace '/login' with your login page route
    };

    return (
        <>
            <Menu>
                <MenuHandler>
                    <svg
                        className="xl:mr-2 hover:text-orange-400 text-black sm:block duration-300 ease-in-out cursor-pointer"
                        width={60}
                        height={45}
                        viewBox="0 0 12 8"
                        fill="none"
                    >
                        <AccountCircleRoundedIcon />
                    </svg>
                </MenuHandler>
                <MenuList className="w-block sm:w-90">

                    <MenuItem className="text-center gap-2 cursor-default text-black block sm:hidden">
                        <GetDayAndDate />
                    </MenuItem>

                    {/* separator */}
                    <hr className="my-3 block sm:hidden" />

                    <MenuItem className="flex items-center gap-2 cursor-default text-black">
                        <PersonRoundedIcon className="mr-2" fontSize="small" />
                        <Typography variant="small" className="font-medium">
                            Walter Hartwell White
                            {/* Staff&apos;s Name */}
                        </Typography>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-2 cursor-default text-black">
                        <BadgeRoundedIcon className="mr-2" fontSize="small" />
                        <Typography variant="small" className="font-medium">
                            JKO/202X/000X
                            {/* Staff&apos;s ID */}
                        </Typography>
                    </MenuItem>
                    <MenuItem className="flex items-center gap-2 cursor-default text-black">
                        <AssignmentIndRoundedIcon className="mr-2" fontSize="small" />
                        <Typography variant="small" className="font-medium">
                            Science School Teacher / Scientist <br />
                            (Information Technology Department)
                            {/* Staff&apos;s Position */}
                        </Typography>
                    </MenuItem>

                    {/* separator */}
                    <hr className="my-3" />

                    <Button fullWidth variant="text" className="flex justify-center gap-2 py-2 border text-red-500 hover:bg-red-500 hover:text-white"
                        onClick={handleLogout}
                    >
                        <LogoutIcon className="mr-2" fontSize="small" />

                        <Typography variant="small" className="font-medium">
                            Logout
                        </Typography>
                    </Button>

                    {/* <div
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
                    </div> */}
                </MenuList>
            </Menu>
        </>

    );
};

export default DropdownUser;
