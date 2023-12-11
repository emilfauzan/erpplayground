import { CardDataStatProp } from "@/interface/typings";
import React from "react";
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export default function CardDataStats({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    description,
    children,
}: CardDataStatProp) {
    return (
        <>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5"> */}

                <Card className="hover:shadow-xl ease-in-out duration-300 border border-stroke">
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

                    </CardBody>
                </Card>


            {/* </div> */}
        </>
    )
}
