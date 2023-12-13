import { CardDataStatProp } from "@/interface/typings";
import React from "react";
import {
    Card,
    CardBody,
    Chip,
    Typography,
} from "@material-tailwind/react";

export default function CardDataStats({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    description,
    children,
    index
}: CardDataStatProp) {

    // if else color based on index
    const subtitle1Color = index % 2 === 0 ? '' : '';
    const subtitle2Color = index % 2 === 0 ? 'green' : '';
    const subtitle3Color = index % 2 === 0 ? 'red' : '';
    const descriptionColor = index % 2 === 0 ? '' : '';

    return (
        <>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-2 2xl:gap-7.5"> */}

            <Card className="hover:shadow-xl ease-in-out duration-300 border border-stroke">
                <CardBody>
                    <div className="flex border-2 border-transparent border-b-black pb-4 rounded-sm">
                        <div className="rounded-full bg-meta-9 flex h-11 w-11 items-center justify-center">
                            {children}
                        </div>
                        <h4 className="pl-4 text-title-md font-bold flex items-center justify-center">{title}</h4>
                    </div>
                    <div className="sm:pl-15 items-end block text-center sm:text-left">
                        <div>
                            {/* <h4 className="text-md whitespace-pre-line font-semibold">{subtitle1}</h4> */}
                            <Chip
                                variant="ghost"
                                color={subtitle1Color}
                                size="lg"
                                value={subtitle1}
                                className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                            />
                            <Chip
                                variant="ghost"
                                color={subtitle2Color}
                                size="lg"
                                value={subtitle2}
                                className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                            />
                            <Chip
                                variant="ghost"
                                color={subtitle3Color}
                                size="lg"
                                value={subtitle3}
                                className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0"
                            />
                            <Chip
                                variant="ghost"
                                color={descriptionColor}
                                size="lg"
                                value={description}
                                className="my-2 font-[600] text-[15px] whitespace-break-spaces flex-shrink-0 italic text-blue-gray-500"
                            />
                            {/* <Typography color="blue-gray" className="text-md flex items-center gap-1 font-semibold whitespace-pre-line" textGradient>
                        {description}
                    </Typography> */}
                        </div>
                    </div>


                </CardBody>
            </Card>


            {/* </div> */}
        </>
    )
}
