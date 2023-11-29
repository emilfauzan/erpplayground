import { CardDataStatProp } from "@/interface/typings";
import React from "react";
// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
    Card,
    // CardHeader,
    CardBody,
    // CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";

function CardDataStats({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    description,
    // levelUp,
    // levelDown,
    children
}: CardDataStatProp) {
    return (
        <Card className="hover:shadow-xl ease-in-out duration-300">
            <CardBody>
                <div className="flex border-2 border-transparent border-b-black pb-4 rounded-sm">
                    <div className="rounded-full bg-meta-9 flex h-11 w-11 items-center justify-center">
                        {children}
                    </div>
                    <h4 className="pl-4 text-title-md font-bold flex items-center justify-center">{title}</h4>
                </div>
                <div className="sm:pl-15 mt-4 flex items-end justify-between">
                    <div>
                        <h4 className="text-md whitespace-pre-line font-semibold">{subtitle1}</h4>
                        <h4 className="text-md whitespace-pre-line">{subtitle2}</h4>
                        <h4 className="text-md whitespace-pre-line">{subtitle3}</h4>
                    </div>
                </div>

                <Typography color="blue-gray" className="text-md sm:pl-15 flex items-center gap-1 font-semibold whitespace-pre-line" textGradient>
                    {description}

                </Typography>

                {/* <span
                    className={`text-md pl-15 flex items-center gap-1 font-semibold whitespace-pre-line ${levelUp && "text-meta-3"
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
                </span> */}
            </CardBody>
        </Card>
    )
}

export default CardDataStats