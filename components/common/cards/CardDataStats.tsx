import { CardDataStatProp } from "@/interface/typings";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function CardDataStats({
    title,
    subtitle,
    description,
    levelUp,
    levelDown,
    children
}: CardDataStatProp) {
    return (
        <div className="rounded-md border border-stroke px-7 py-6 shadow-default">
            <div className="justify-left flex items-center">
                <div className="justify-center rounded-full bg-meta-2">
                    <div className="flex h-11.5 w-11.5 items-center justify-center">
                        {children}
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-title-md font-bold">{title}</h4>
                </div>
            </div>
            <hr className="my-2 border-blue-gray-50" />

            <div className="ml-15 mt-4 flex items-end justify-between">
                <div>
                    <h4 className="text-md whitespace-pre-line">{subtitle}</h4>
                </div>
            </div>

            <span
                className={`text-md ml-15 flex items-center gap-1 whitespace-pre-line ${levelUp && "text-meta-3"
                    } ${levelDown && "text-meta-5"} `}
            >
                {description}

                {levelUp && (
                    <svg
                        className="fill-meta-3"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ArrowUpwardIcon />
                    </svg>
                )}

                {levelDown && (
                    <svg
                        className="fill-meta-1"
                        width="10"
                        height="11"
                        viewBox="0 0 10 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ArrowDownwardIcon />
                    </svg>
                )}
            </span>
        </div>
    )
}

export default CardDataStats