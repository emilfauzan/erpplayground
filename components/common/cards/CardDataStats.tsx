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

    const subtitle2Color = index % 2 === 0 ? 'green' : 'bone';
    const subtitle3Color = index % 2 === 0 ? 'red' : 'bone';

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
                    <div className="sm:pl-15 mt-4 flex items-end justify-between">
                        <div className="grid gap-2">
                            <h4 className="text-md whitespace-pre-line font-semibold">{subtitle1}</h4>
                            <Chip
                                variant="ghost"
                                color={subtitle2Color}
                                size="lg"
                                value={subtitle2}
                            />
                            <Chip
                                variant="ghost"
                                color={subtitle3Color}
                                size="lg"
                                value={subtitle3}
                            />
                    <Typography color="blue-gray" className="text-md flex items-center gap-1 font-semibold whitespace-pre-line" textGradient>
                        {description}
                    </Typography>
                        </div>
                    </div>


                </CardBody>
            </Card>


            {/* </div> */}
        </>
    )
}
