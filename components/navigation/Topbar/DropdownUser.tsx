import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const DropdownUser = () => {
    // const [dropdownOpen, setDropdownOpen] = useState(false);

    // const trigger = useRef<any>(null);
    // const dropdown = useRef<any>(null);

    // close on click outside
    // useEffect(() => {
    //     const clickHandler = ({ target }: MouseEvent) => {
    //         if (!dropdown.current) return;
    //         if (
    //             !dropdownOpen ||
    //             dropdown.current.contains(target) ||
    //             trigger.current.contains(target)
    //         )
    //             return;
    //         setDropdownOpen(false);
    //     };
    //     document.addEventListener("click", clickHandler);
    //     return () => document.removeEventListener("click", clickHandler);
    // });

    // close if the esc key is pressed
    // useEffect(() => {
    //     const keyHandler = ({ keyCode }: KeyboardEvent) => {
    //         if (!dropdownOpen || keyCode !== 27) return;
    //         setDropdownOpen(false);
    //     };
    //     document.addEventListener("keydown", keyHandler);
    //     return () => document.removeEventListener("keydown", keyHandler);
    // });

    return (
        <div className="relative">
            <Link
                // ref={trigger}
                // onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-4"
                href={"#"}
            >
                <svg
                    className="mr-5 hidden text-white sm:block"
                    width={60}
                    height={45}
                    viewBox="0 0 12 8"
                    fill="none"
                >
                    <AccountCircleIcon />
                </svg>
            </Link>
        </div>
    );
};

export default DropdownUser;
